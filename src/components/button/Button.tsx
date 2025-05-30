
import React from "react";
import "./Button.css";
import { Plus, ArrowRight } from "lucide-react";

interface ButtonProps {
  label?: string;
  variant?: "primary" | "secondary" | "success" | "warning";
  size?: "small" | "base" | "large";
  styleType?: "solid" | "outline" | "ghost";
  state?: "default" | "hover" | "disabled";
  showLeftIcon?: boolean;
  showRightIcon?: boolean;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  label = "Button",
  variant = "primary",
  size = "base",
  styleType = "solid",
  state = "default",
  showLeftIcon = false,
  showRightIcon = false,
  onClick,
}) => {
  const className = `btn btn-${variant} btn-${size} btn-${styleType} btn-${state}`;
  
  return (
    <button className={className} onClick={onClick}>
      {showLeftIcon && (
        <Plus className="btn-icon btn-icon-left" size={20} />
      )}
      <span className="btn-text">{label}</span>
      {showRightIcon && (
        <ArrowRight className="btn-icon btn-icon-right" size={20} />
      )}
    </button>
  );
};
