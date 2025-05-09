plugins {
	java
  alias(libs.plugins.graalvm.native)
	alias(libs.plugins.spring.dependency.management)
	alias(libs.plugins.spring.boot)
}

group = "org.sagebionetworks.openchallenges"
version = "0.0.1-SNAPSHOT"

java {
  toolchain {
    languageVersion = JavaLanguageVersion.of(21)
    nativeImageCapable = true
  }
}

graalvmNative {
  binaries {
    named("main") {
      // Enable GraalVM Toolchain detection
      javaLauncher.set(javaToolchains.launcherFor {
        languageVersion.set(JavaLanguageVersion.of(21))
        vendor.set(JvmVendorSpec.matching("Oracle"))
      })

      imageName.set(project.name)
      buildArgs.add("--static")
      buildArgs.add("--libc=musl")
      buildArgs.add("--no-fallback")
    }
  }
}

repositories {
	mavenCentral()
}

dependencies {
	implementation(libs.spring.ai.starter.mcp.server.webmvc)
	testImplementation(libs.spring.boot.starter.test)
	testRuntimeOnly(libs.junit.platform.launcher)
}

tasks.withType<Test> {
	useJUnitPlatform()
}
