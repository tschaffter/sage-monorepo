package org.sagebionetworks.agora.api.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * Home redirection to OpenAPI api documentation
 */
@Controller
public class HomeController {

  @RequestMapping("/")
  public String index() {
    return "redirect:swagger-ui.html";
  }
}
