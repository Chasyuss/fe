"use client";
import React from "react";
import ScoreCalculationMethod from "./DCA/ScoreCalculationMethod";
import BrandUnderstand from "./DCA/BrandUnderstand";
import ProblemDefinition from "./DCA/ProblemDefinition";
import Possibility from "./DCA/Possibility";
import EvaluationCriteria from "./DCA/EvaluationCriteria";
import MediaSelection from "./DCA/MediaSelection";
import { useRouter } from "next/navigation";
import ButtonBase from "@/components/common/ButtonBase";

interface DcaCriteriaProps {
  contestName: string;
}

const DcaCriteria = ({ contestName }: DcaCriteriaProps) => {
  const router = useRouter();
  return (
    <div className="flex flex-col items-start w-full">
      <div className="flex flex-row items-center w-full">
        <div className="text-gray-900 font-B01-M"> 공모전 </div>
        <span className="mx-3 text-gray-200">|</span>
        <div className="text-gray-700 font-B01-R">{contestName}</div>
      </div>
      <div className="text-gray-900 font-semibold text-4xl mt-4">평가 기준</div>

      <div className="w-full h-[1.2px] bg-gray-100 mt-[36px] mb-[52px]" />

      <ScoreCalculationMethod />
      <EvaluationCriteria />
      <BrandUnderstand />
      <MediaSelection />
      <ProblemDefinition />
      <Possibility />
      <ButtonBase
        label="리포트로 돌아가기"
        size="S"
        className="mt-[148px] self-center"
        onClick={() => router.push("/report")}
      />
    </div>
  );
};

export default DcaCriteria;
