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
  RiPlayLine,
  RiPauseLine,
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
  RiPlayLine as PlayIcon,
  RiPauseLine as PauseIcon,
};

/**
 * Turkish Flag SVG (🇹🇷)
 */
export function FlagTrIcon({ className = "h-3.5 w-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 30 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect width="30" height="20" rx="2" fill="#E30A17" />
      <circle cx="11.5" cy="10" r="5" fill="#FFFFFF" />
      <circle cx="12.8" cy="10" r="4" fill="#E30A17" />
      <polygon
        points="16.2,10 19.3,11 17.4,8.4 17.4,11.6 19.3,9"
        fill="#FFFFFF"
      />
    </svg>
  );
}

/**
 * English / UK Flag SVG (🇬🇧)
 */
export function FlagEnIcon({ className = "h-3.5 w-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 30 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect width="30" height="20" rx="2" fill="#012169" />
      <path d="M0 0L30 20M30 0L0 20" stroke="#FFFFFF" strokeWidth="3.6" />
      <path d="M0 0L30 20M30 0L0 20" stroke="#C8102E" strokeWidth="1.8" />
      <path d="M15 0V20M0 10H30" stroke="#FFFFFF" strokeWidth="5.5" />
      <path d="M15 0V20M0 10H30" stroke="#C8102E" strokeWidth="3.2" />
    </svg>
  );
}

/**
 * Arabic Flag SVG (🇸🇦 / Pan-Arab Green Emblem)
 */
export function FlagArIcon({ className = "h-3.5 w-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 30 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect width="30" height="20" rx="2" fill="#006C35" />
      {/* Stylized Calligraphy Line & Sword */}
      <rect x="7" y="6.5" width="16" height="2.2" rx="1" fill="#FFFFFF" />
      <rect x="9" y="10" width="12" height="1.4" rx="0.7" fill="#FFFFFF" opacity="0.85" />
      <path
        d="M8 14H21.5M20 12.8L22.5 14L20 15.2"
        stroke="#FFFFFF"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

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
      <path
        d="M2 2H38V38H2V2Z"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeOpacity="0.35"
      />
      <path
        d="M28 13H13V27H27V20H20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
      />
      <path d="M32 8L25 8L32 15V8Z" fill="#C5A880" />
    </svg>
  );
}
