package org.sagebionetworks.openchallenges.challenge.service.service;

import java.util.Arrays;
import java.util.List;
import org.sagebionetworks.openchallenges.challenge.service.model.dto.ChallengesPerYearDto;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class ChallengeAnalyticsService {

  @Transactional(readOnly = true)
  public ChallengesPerYearDto getChallengesPerYear() {
    List<String> years = Arrays.asList(
      "2007",
      "2008",
      "2009",
      "2010",
      "2011",
      "2012",
      "2013",
      "2014",
      "2015",
      "2016",
      "2017",
      "2018",
      "2019",
      "2020",
      "2021",
      "2022",
      "2023",
      "2024",
      "2025"
    );

    // The following line will be auto-updated by a script and should NOT be modified manually.
    List<Integer> challengeCounts = /* AUTO-UPDATE MARKER */Arrays.asList(11, 17, 25, 34, 45, 53, 61, 73, 85, 100, 138, 155, 178, 203, 254, 316, 387, 452, 484);
    Integer undatedChallengeCount = 171;

    // int currentYear = Year.now().getValue();
    // years.removeIf(year -> Integer.parseInt(year) > currentYear);
    // challengeCounts = challengeCounts.subList(0, years.size());

    return ChallengesPerYearDto.builder()
      .years(years)
      .challengeCounts(challengeCounts)
      .undatedChallengeCount(undatedChallengeCount)
      .build();
  }
}
