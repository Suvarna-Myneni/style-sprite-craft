
import React from "react";
import { User, X } from "lucide-react";
import "./enhanced-tags.css";

interface EnhancedTagsProps {
  showRightIcon?: boolean;
  showLeftIcon?: boolean;
  status?: "primary" | "success" | "warning" | "default";
  size?: "large" | "base" | "tiny";
  mode?: "dark" | "light";
  className?: string;
  children?: React.ReactNode;
}

export const EnhancedTags: React.FC<EnhancedTagsProps> = ({
  showRightIcon = true,
  showLeftIcon = true,
  status = "default",
  size = "base",
  mode = "light",
  className = "",
  children = "Label"
}) => {
  const getIconSize = () => {
    switch (size) {
      case "tiny": return 12;
      case "base": return 14;
      case "large": return 16;
      default: return 14;
    }
  };

  const getIconColor = () => {
    if (status === "default" && mode === "light") return "#3D3F50";
    if (mode === "light" && status === "primary") return "#0C0F24";
    if (mode === "light" && status === "warning") return "#895D0B";
    if (status === "warning" && mode === "dark") return "#FFE1A4";
    if (mode === "light" && status === "success") return "#1E774A";
    if (status === "success" && mode === "dark") return "#CCF2DB";
    return "#E9ECF4";
  };

  const iconSize = getIconSize();
  const iconColor = getIconColor();

  return (
    <div className={`enhanced-tags ${size} ${mode} ${status} ${className}`}>
      {showLeftIcon && (
        <User size={iconSize} color={iconColor} className="enhanced-tags-icon-left" />
      )}
      
      <div className="enhanced-tags-text-wrapper">{children}</div>
      
      {showRightIcon && (
        <X size={iconSize} color={iconColor} className="enhanced-tags-icon-right" />
      )}
    </div>
  );
};
