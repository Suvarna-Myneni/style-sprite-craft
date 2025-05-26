
import React from "react";

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
  return (
    <div className={`tag ${size} ${status} ${mode}`}>
      {showLeftIcon && <span className="tag-icon-left">👤</span>}
      <span className="tag-label">{children || label}</span>
      {showRightIcon && <span className="tag-icon-right">❌</span>}
    </div>
  );
};

export const Tag = TagsComponent;
