
import React from "react";
import clsx from "clsx";

// Status and Mode types
type Status = "default" | "primary" | "warning" | "success";
type Mode = "light" | "dark";
type Size = "tiny" | "base" | "large";

export interface LovableTagProps {
  label: string;
  status?: Status;
  mode?: Mode;
  size?: Size;
  iconLeft?: React.ReactNode;
  onClose?: () => void;
  className?: string;
}

const COLORS = {
  default: {
    light: {
      bg: "bg-[#E9ECF4]",
      text: "text-[#3D3F50]",
      icon: "text-[#3D3F50]",
      close: "text-[#3D3F50]",
    },
    dark: {
      bg: "bg-[#3D3F50]",
      text: "text-[#E9ECF4]",
      icon: "text-[#E9ECF4]",
      close: "text-[#E9ECF4]",
    },
  },
  primary: {
    light: {
      bg: "bg-[#D4DAEA]",
      text: "text-[#0C0F24]",
      icon: "text-[#0C0F24]",
      close: "text-[#3D3F50]",
    },
    dark: {
      bg: "bg-[#0C0F24]",
      text: "text-[#E9ECF4]",
      icon: "text-[#E9ECF4]",
      close: "text-[#E9ECF4]",
    },
  },
  warning: {
    light: {
      bg: "bg-[#FFE1A4]",
      text: "text-[#895D0B]",
      icon: "text-[#895D0B]",
      close: "text-[#895D0B]",
    },
    dark: {
      bg: "bg-[#895D0B]",
      text: "text-[#FFE1A4]",
      icon: "text-[#FFE1A4]",
      close: "text-[#FFE1A4]",
    },
  },
  success: {
    light: {
      bg: "bg-[#CCF2DB]",
      text: "text-[#1E774A]",
      icon: "text-[#1E774A]",
      close: "text-[#1E774A]",
    },
    dark: {
      bg: "bg-[#1E774A]",
      text: "text-[#CCF2DB]",
      icon: "text-[#CCF2DB]",
      close: "text-[#CCF2DB]",
    },
  },
};

const SIZES = {
  tiny: "text-[12px] h-[22px] min-w-[48px] px-[6px] gap-1 rounded-md leading-[18px]",
  base: "text-[14px] h-[24px] min-w-[56px] px-[6px] gap-1 rounded-md leading-[20px]",
  large: "text-[16px] h-[32px] min-w-[68px] px-[8px] gap-1 rounded-md leading-[24px]",
};

const ICON_SIZE = {
  tiny: 12,
  base: 14,
  large: 16,
};

export const LovableTag: React.FC<LovableTagProps> = ({
  label,
  status = "default",
  mode = "light",
  size = "base",
  iconLeft,
  onClose,
  className,
}) => {
  const color = COLORS[status][mode];
  const iconSize = ICON_SIZE[size];

  return (
    <span
      className={clsx(
        "inline-flex items-center font-['Roboto'] font-normal",
        SIZES[size],
        color.bg,
        color.text,
        className
      )}
      style={{ userSelect: "none" }}
    >
      {/* Left Icon (User icon fallback) */}
      <span className={clsx("flex items-center", color.icon)}>
        {iconLeft ?? (
          <svg width={iconSize} height={iconSize} fill="none" viewBox="0 0 16 16">
            <circle
              cx="8"
              cy={iconSize === 12 ? 4 : 5}
              r={iconSize === 12 ? 2.5 : 3.5}
              stroke="currentColor"
              strokeWidth={iconSize === 12 ? 0.75 : 1}
            />
            <path
              d={
                iconSize === 12
                  ? "M2.5 10.5C2.5 8.567 5.333 8.567 8 8.567C10.667 8.567 13.5 8.567 13.5 10.5"
                  : "M2 13C2 10.333 5.333 10.333 8 10.333C10.667 10.333 14 10.333 14 13"
              }
              stroke="currentColor"
              strokeWidth={iconSize === 12 ? 0.75 : 1}
              strokeLinecap="round"
            />
          </svg>
        )}
      </span>
      {/* Label */}
      <span className="mx-1">{label}</span>
      {/* Close (X) */}
      {onClose && (
        <button
          className={clsx("flex items-center px-0", color.close)}
          tabIndex={0}
          style={{
            width: iconSize,
            height: iconSize,
            background: "transparent",
            border: "none",
          }}
          aria-label="Remove tag"
          onClick={onClose}
        >
          {/* X Icon */}
          <svg width={iconSize} height={iconSize} viewBox="0 0 16 16" fill="none">
            <line
              x1="4"
              y1="4"
              x2="12"
              y2="12"
              stroke="currentColor"
              strokeWidth={iconSize === 12 ? 1.2 : 1.6}
              strokeLinecap="round"
            />
            <line
              x1="12"
              y1="4"
              x2="4"
              y2="12"
              stroke="currentColor"
              strokeWidth={iconSize === 12 ? 1.2 : 1.6}
              strokeLinecap="round"
            />
          </svg>
        </button>
      )}
    </span>
  );
};
