"use client";

import { useEffect, useState } from "react";
import { FallingCherryPetals } from "./falling-cherry-petals";
import { FallingParasols } from "./falling-parasols";
import { FallingLeaves } from "./falling-leaves";
import { FallingSnowflakes } from "./falling-snowflakes";

type Season = "spring" | "summer" | "autumn" | "winter";

export function SeasonalFallingItems({ count = 24 }: { count?: number }) {
  const [currentSeason, setCurrentSeason] = useState<Season>("spring");

  useEffect(() => {
    // 현재 계절 결정 (북반구 기준)
    const determineCurrentSeason = (): Season => {
      const month = new Date().getMonth() + 1; // getMonth()는 0-11 반환

      if (month >= 3 && month <= 5) return "spring"; // 봄: 3-5월
      if (month >= 6 && month <= 8) return "summer"; // 여름: 6-8월
      if (month >= 9 && month <= 11) return "autumn"; // 가을: 9-11월
      return "winter"; // 겨울: 12-2월
    };

    setCurrentSeason(determineCurrentSeason());
  }, []);

  // 계절에 따라 적절한 컴포넌트 렌더링
  switch (currentSeason) {
    case "spring":
      return <FallingCherryPetals count={count} />;
    case "summer":
      return <FallingParasols count={count} />;
    case "autumn":
      return <FallingLeaves count={count} />;
    case "winter":
      return <FallingSnowflakes count={count} />;
    default:
      return <FallingCherryPetals count={count} />;
  }
}
