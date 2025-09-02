"use client";
import React, { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import ReportHeader from "../ReportHeader";
import Summary from "./Summary";
import AllEvalution from "./AllEvalution";
import GrayButton from "@/components/common/GrayButton";
import ButtonBase from "@/components/common/ButtonBase";
import Strength from "./Strength";
import DcaCriteria from "../Criteria/DcaCriteria";
import YccScoreDetail from "../ScoreDetail/YccScoreDetail";
import RadarChartComponent from "./RadarChartComponent.tsx";
import { Arrow } from "../../../../../../../public";

type ContestName = "DCA" | "YCC";

interface WorkEvaluationProps {
  contestName: ContestName;
  workId: number;
  brand: string;
  workName: string;
  workMembers: string[];
  hasFeedback: boolean;
}

type View = "report" | "criteria" | "scoreDetail";

const WorkEvaluation = ({
  contestName,
  workId,
  brand,
  workName,
  workMembers,
  hasFeedback,
}: WorkEvaluationProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  // 브라우저 뒤로 가기 시 /reports 페이지로 이동
  useEffect(() => {
    const handlePopState = () => {
      router.push("/reports");
    };

    // 현재 페이지를 히스토리에 추가
    window.history.pushState(null, "", window.location.href);
    
    // popstate 이벤트 리스너 추가
    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [router]);

  // 쿼리 파라미터에서 현재 뷰 가져오기
  const currentView = (searchParams?.get("view") as View) || "report";

  // 뷰 변경 시 쿼리 파라미터 업데이트
  const handleViewChange = (newView: View) => {
    const currentUrl = new URL(window.location.href);
    currentUrl.searchParams.set("view", newView);
    router.push(currentUrl.pathname + currentUrl.search, { scroll: false });

    // 스크롤을 맨 위로 이동
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (currentView === "criteria") {
    return (
      <div>
        <DcaCriteria contestName={contestName} />
      </div>
    );
  }

  if (currentView === "scoreDetail") {
    return (
      <div>
        <YccScoreDetail contestName={contestName} workName={workName} />
      </div>
    );
  }

  return (
    <div>
      <ReportHeader
        workName={workName}
        contestName={contestName}
        brand={brand}
        workMembers={workMembers}
        workId={workId}
        hasFeedback={hasFeedback}
      />

      <div className="w-full h-[1.2px] bg-gray-100 mt-[36px] mb-[52px]" />
      <Summary workId={workId} />
      <RadarChartComponent workId={workId} contestName={contestName} />
      <div className="w-full border-t border-gray-300 border-dashed mt-[108px] mb-[108px]" />
      <AllEvalution workId={workId} contestName={contestName} />

      <div className="flex flex-row items-center justify-end mt-20 w-full gap-[10px]">
        <GrayButton
          label={
            <span className="flex items-center gap-1">
              <span className="text-gray-800 font-B02-SB">평가 기준</span>
              <Arrow />
            </span>
          }
          className="flex pt-3 pl-[22px] pr-4 cursor-pointer"
          onClick={() => handleViewChange("criteria")}
        />
        <ButtonBase
          label={
            <span className="flex items-center gap-1">
              <span className="text-white text-center font-B02-SB">
                점수 상세보기
              </span>
              <Arrow strokeColor="#ECECEE" />
            </span>
          }
          size="S"
          onClick={() => handleViewChange("scoreDetail")}
        />
      </div>

      <Strength workId={workId} />
    </div>
  );
};

export default WorkEvaluation;
