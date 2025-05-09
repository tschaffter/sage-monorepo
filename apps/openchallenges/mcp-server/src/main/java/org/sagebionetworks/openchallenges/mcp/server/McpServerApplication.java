package org.sagebionetworks.openchallenges.mcp.server;

import java.util.Arrays;
import java.util.List;
import org.springframework.ai.tool.ToolCallback;
import org.springframework.ai.tool.ToolCallbacks;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class McpServerApplication {

  public static void main(String[] args) {
    SpringApplication.run(McpServerApplication.class, args);
  }

  @Bean
  public List<ToolCallback> tools(
    ChallengeAnalyticsService challengeAnalyticsService,
    ChallengePlatformService challengePlatformService
  ) {
    return Arrays.asList(ToolCallbacks.from(challengeAnalyticsService, challengePlatformService));
  }
}
