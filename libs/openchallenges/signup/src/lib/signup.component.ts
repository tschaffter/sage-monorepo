import { Component, inject, OnInit } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
  UntypedFormBuilder,
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatInputModule } from '@angular/material/input';
import { Router, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {
  UserCreateRequest,
  UserService,
  BasicError as ApiClientError,
} from '@sagebionetworks/openchallenges/api-client-angular';
import { ConfigService } from '@sagebionetworks/openchallenges/config';
import { isApiClientError } from '@sagebionetworks/openchallenges/util';

@Component({
  selector: 'openchallenges-signup',
  imports: [
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  private readonly router = inject(Router);
  private readonly formBuilder = inject(UntypedFormBuilder);
  private readonly userService = inject(UserService);
  private readonly configService = inject(ConfigService);

  public appVersion: string;
  public dataUpdatedOn: string;

  newUserForm!: UntypedFormGroup;
  errors = {
    alreadyExists: false,
    other: undefined,
  } as { other?: string };

  submitted = false;

  constructor() {
    this.appVersion = this.configService.config.appVersion;
    this.dataUpdatedOn = this.configService.config.dataUpdatedOn;
  }

  ngOnInit(): void {
    this.newUserForm = this.formBuilder.group({
      email: new UntypedFormControl('awesome-user@example.org', [
        Validators.required,
        Validators.email,
      ]),
      password: new UntypedFormControl('yourpassword', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(64),
      ]),
      username: new UntypedFormControl('awesome-user', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(25),
        // forbiddenNameValidator(/bob/i) // <-- Here's how you pass in the custom
      ]),
    });
  }

  get email() {
    return this.newUserForm.get('email');
  }

  get password() {
    return this.newUserForm.get('password');
  }

  get username() {
    return this.newUserForm.get('username');
  }

  getEmailErrorMessage(): string {
    if (this.email?.hasError('required') || this.email?.hasError('email')) {
      return 'You must enter a valid email.';
    }
    return '';
  }

  getPasswordErrorMessage(): string {
    if (
      this.password?.hasError('required') ||
      this.password?.hasError('minlength') ||
      this.password?.hasError('maxlength')
    ) {
      return 'A password between 6 and 64 characters is required.';
    }
    return '';
  }

  getUsernameErrorMessage(): string {
    if (
      this.username?.hasError('required') ||
      this.username?.hasError('minlength') ||
      this.username?.hasError('maxlength')
    ) {
      return 'A username between 3 and 25 characters is required.';
    } else if (this.username?.hasError('alreadyExists')) {
      return `The username ${this.username?.value} is not available.`;
    }
    return '';
  }

  createUserAccount(): void {
    if (this.newUserForm.invalid) {
      return;
    }
    this.submitted = true;
    this.errors.other = undefined;

    const userCreateRequest: UserCreateRequest = {
      login: this.username?.value,
      email: this.email?.value,
      password: this.password?.value,
      name: '',
    };

    this.userService.createUser(userCreateRequest).subscribe(
      () => {
        this.router.navigate(['login']);
      },
      (err) => {
        const error = err.error as ApiClientError;
        if (isApiClientError(error)) {
          if (error.status === 409) {
            this.username?.setErrors({
              alreadyExists: true,
            });
          } else {
            this.errors.other = `Server error: ${error.title}`;
          }
        }
      },
    );
  }
}
