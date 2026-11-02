import React from "react";
import {
  RiInstagramLine,
  RiWhatsappLine,
  RiArrowRightUpLine,
  RiArrowRightDownLine,
  RiArrowRightLine,
  RiArrowLeftLine,
  RiArrowDownLine,
  RiMapPin2Line,
  RiPhoneLine,
  RiMailLine,
  RiCheckLine,
  RiCloseLine,
  RiMenu4Line,
  RiBuilding2Line,
  RiRoadsterLine,
  RiExpandLeftRightLine,
  RiSendPlaneLine,
  RiLoader4Line,
  RiCheckboxCircleLine,
} from "react-icons/ri";

export {
  RiInstagramLine as InstagramIcon,
  RiWhatsappLine as WhatsAppIcon,
  RiArrowRightUpLine as ArrowUpRightIcon,
  RiArrowRightDownLine as ArrowDownRightIcon,
  RiArrowRightLine as ArrowRightIcon,
  RiArrowLeftLine as ArrowLeftIcon,
  RiArrowDownLine as ArrowDownIcon,
  RiMapPin2Line as MapPinIcon,
  RiPhoneLine as PhoneIcon,
  RiMailLine as MailIcon,
  RiCheckLine as CheckIcon,
  RiCloseLine as CloseIcon,
  RiMenu4Line as MenuIcon,
  RiBuilding2Line as BuildingIcon,
  RiRoadsterLine as CarIcon,
  RiExpandLeftRightLine as CompareSliderIcon,
  RiSendPlaneLine as SendIcon,
  RiLoader4Line as LoaderIcon,
  RiCheckboxCircleLine as SuccessCircleIcon,
};

/**
 * Custom Architectural & Automotive Monogram Vector Mark for Genç Group
 */
export function GencGroupMark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Outer Architectural Frame */}
      <path
        d="M2 2H38V38H2V2Z"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeOpacity="0.35"
      />
      {/* Interlocking Precision G Geometry */}
      <path
        d="M28 13H13V27H27V20H20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
      />
      <path
        d="M32 8L25 8L32 15V8Z"
        fill="#C5A880"
      />
    </svg>
  );
}
