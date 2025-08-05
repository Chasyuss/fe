import React from "react";
import ButtonBase from "@/components/common/ButtonBase";
import GrayButton from "@/components/common/GrayButton";
import { useIsMobile } from "@/hooks/useIsMobile";

interface WithdarwConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title?: string;
  description?: string;
  cancelText?: string;
  confirmText?: string;
}

const WithdarwConfirmModal = ({
  isOpen,
  onClose,
  onConfirm,
  title = "",
  description = "",
  cancelText = "",
  confirmText = "",
}: WithdarwConfirmModalProps) => {
  if (!isOpen) return null;
  const isMobile = useIsMobile();
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 w-full">
      <div className="w-[328px] rounded-2xl px-5 pb-5 pt-[30px] bg-white shadow-shadow-1 flex flex-col items-center">
        <svg
          width="46"
          height="45"
          viewBox="0 0 46 45"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="23" cy="22.5" r="22.5" fill="#E9F0FF" />
          <path
            d="M21.0544 25.9044V12H24.7813V25.9044H21.0544ZM22.9179 33.0429C22.4783 33.0429 22.0817 32.9473 21.7281 32.7562C21.3745 32.5651 21.0974 32.2975 20.8967 31.9535C20.696 31.6094 20.5957 31.2272 20.5957 30.8067C20.5957 30.3862 20.696 30.004 20.8967 29.66C21.0974 29.3159 21.3745 29.0484 21.7281 28.8572C22.0817 28.6661 22.4783 28.5706 22.9179 28.5706C23.3575 28.5706 23.754 28.6661 24.1076 28.8572C24.4612 29.0484 24.7383 29.3159 24.939 29.66C25.1397 30.004 25.24 30.3862 25.24 30.8067C25.24 31.2272 25.1397 31.6094 24.939 31.9535C24.7383 32.2975 24.4612 32.5651 24.1076 32.7562C23.754 32.9473 23.3575 33.0429 22.9179 33.0429Z"
            fill="#6D9BFF"
          />
        </svg>

        <div className="text-center text-black font-T03-B mt-[18px]">{title}</div>
        <div className="text-center text-gray-500 font-B02-M mb-6 mt-[6px]">
          {description}
        </div>

        <div className="flex flex-row w-full gap-3 justify-center">
          <ButtonBase label={cancelText} onClick={onClose} size="S" className="w-[100px]"/>
          <GrayButton
            label={confirmText}
            className="w-[176px] cursor-pointer flex items-center justify-center"
            onClick={onConfirm}
          />
        </div>
      </div>
    </div>
  );
};

export default WithdarwConfirmModal;
