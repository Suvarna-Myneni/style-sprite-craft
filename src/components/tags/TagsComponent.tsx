
import React from "react";
import { User, X } from "lucide-react";

interface TagsComponentProps {
  size?: "tiny" | "base" | "large";
  status?: "default" | "success" | "warning" | "primary";
  mode?: "light" | "dark";
  label?: string;
  showLeftIcon?: boolean;
  showRightIcon?: boolean;
  children?: React.ReactNode;
}

export const TagsComponent: React.FC<TagsComponentProps> = ({
  size = "base",
  status = "default", 
  mode = "light",
  label = "Label",
  showLeftIcon = true,
  showRightIcon = true,
  children
}) => {
  const getIconSize = () => {
    switch (size) {
      case "tiny": return 10;
      case "base": return 12;
      case "large": return 14;
      default: return 12;
    }
  };

  const iconSize = getIconSize();

  return (
    <div className={`tag ${size} ${status} ${mode}`}>
      {showLeftIcon && (
        <span className="tag-icon-left">
          <User size={iconSize} />
        </span>
      )}
      <span className="tag-label">{children || label}</span>
      {showRightIcon && (
        <span className="tag-icon-right">
          <X size={iconSize} />
        </span>
      )}
    </div>
  );
};

export const Tag = TagsComponent;
