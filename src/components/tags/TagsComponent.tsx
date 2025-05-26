
import React from "react";
import { X, User } from "lucide-react";

interface TagsComponentProps {
  showRightIcon?: boolean;
  showLeftIcon?: boolean;
  status?: "primary" | "success" | "warning" | "default";
  size?: "large" | "base" | "tiny";
  mode?: "dark" | "light";
  className?: string;
  children?: React.ReactNode;
}

export const TagsComponent: React.FC<TagsComponentProps> = ({
  showRightIcon = true,
  showLeftIcon = true,
  status = "default",
  size = "base",
  mode = "light",
  className = "",
  children = "Label"
}) => {
  const getIconColor = () => {
    if (status === "default" && mode === "light") return "#3D3F50";
    if (mode === "light" && status === "primary") return "#0C0F24";
    if (mode === "light" && status === "warning") return "#895D0B";
    if (status === "warning" && mode === "dark") return "#FFE1A4";
    if (mode === "light" && status === "success") return "#1E774A";
    if (status === "success" && mode === "dark") return "#CCF2DB";
    return "#E9ECF4";
  };

  const getIconSize = () => {
    if (size === "tiny") return 12;
    if (size === "base") return 14;
    if (size === "large") return 16;
    return 14;
  };

  const baseClasses = `tags-component ${size} ${mode} ${status} ${className}`;

  return (
    <div className={baseClasses}>
      {showLeftIcon && (
        <User 
          size={getIconSize()} 
          color={getIconColor()}
          className="tags-left-icon"
        />
      )}

      <div className="tags-text-wrapper">
        {children}
      </div>

      {showRightIcon && (
        <X 
          size={getIconSize()} 
          color={getIconColor()}
          className="tags-right-icon"
        />
      )}
    </div>
  );
};
