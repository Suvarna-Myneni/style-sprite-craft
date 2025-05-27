
import React from "react";
import "./Button.css";

interface ButtonProps {
  label?: string;
  variant?: "primary";
  size?: "small" | "base" | "large";
  styleType?: "solid" | "outline" | "ghost";
  state?: "default" | "hover" | "disabled";
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  label = "Button",
  variant = "primary",
  size = "base",
  styleType = "solid",
  state = "default",
  onClick,
}) => {
  const className = `btn btn-${variant} btn-${size} btn-${styleType} btn-${state}`;
  return (
    <button className={className} onClick={onClick}>
      <span className="btn-text">{label}</span>
    </button>
  );
};
