
# Complete Design System Components Knowledge Base

## 1. ExpInputField Component

### Component Code (ExpInputField.tsx)
```typescript
import React, { forwardRef } from 'react';
import { cn } from '@/lib/utils';
import './ExpInputField.css';

interface ExpInputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  hint?: string;
  label?: string;
  labelTextStyle?: string;
  isDarkMode?: boolean;
  borderRadius?: number;
  isDense?: boolean;
  hasError?: boolean;
  height?: number;
  suffixIcon?: React.ReactNode;
  validator?: (value: string) => string | undefined;
  onSubmittedAction?: (value: string) => void;
  ignorePointers?: boolean;
  floatingLabelBehavior?: 'auto' | 'always' | 'never';
  showLabel?: boolean;
  showPlaceholder?: boolean;
}

const ExpInputField = forwardRef<HTMLInputElement, ExpInputFieldProps>(
  ({ 
    hint = "Text here",
    label = "Label",
    labelTextStyle,
    isDarkMode = false,
    borderRadius = 8,
    isDense = false,
    hasError = false,
    height = 48,
    suffixIcon,
    validator,
    onSubmittedAction,
    ignorePointers = false,
    disabled = false,
    className,
    style,
    onKeyDown,
    showLabel = true,
    showPlaceholder = true,
    ...props 
  }, ref) => {

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter' && onSubmittedAction) {
        onSubmittedAction((e.target as HTMLInputElement).value);
      }
      onKeyDown?.(e);
    };

    const containerHeight = hasError && height ? height + 17 : height;

    const containerClasses = cn(
      "text-box",
      isDarkMode && "dark",
      hasError && "error",
      disabled && "disabled",
      className
    );

    const labelClasses = cn(
      "text-wrapper",
      labelTextStyle
    );

    const frameClasses = cn(
      "frame"
    );

    const inputClasses = cn(
      "text"
    );

    return (
      <div 
        className={containerClasses} 
        style={{ 
          height: containerHeight, 
          borderRadius: `${borderRadius}px`,
          ...style 
        }}
      >
        {showLabel && (
          <div className="label-t">
            <div className={labelClasses}>
              {label}
            </div>
          </div>
        )}
        
        <div className={frameClasses} style={{ borderRadius: `${borderRadius}px` }}>
          <input
            ref={ref}
            placeholder={showPlaceholder ? hint : ""}
            disabled={disabled || ignorePointers}
            className={inputClasses}
            onKeyDown={handleKeyDown}
            {...props}
          />
          {suffixIcon && (
            <div className="flex-shrink-0">
              {suffixIcon}
            </div>
          )}
        </div>
        
        {hasError && validator && (
          <span className={cn(
            'text-xs font-normal mt-1',
            isDarkMode ? 'text-orange-400' : 'text-red-500'
          )}>
            {validator(props.value as string)}
          </span>
        )}
      </div>
    );
  }
);

ExpInputField.displayName = "ExpInputField";

export { ExpInputField };
export type { ExpInputFieldProps };
```

### Styles (ExpInputField.css)
```css
.text-box {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 4px;
  width: 320px;
}

.label-t {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 4px;
  width: 100%;
  height: 24px;
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
}

.text-wrapper {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  color: #303030;
  flex: none;
  order: 0;
  flex-grow: 0;
}

.frame {
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 12px;
  gap: 8px;
  width: 100%;
  height: 48px;
  background: #FFFFFF;
  border: 1px solid #CECFD3;
  border-radius: 8px;
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
  transition: border-color 0.2s ease-in-out;
}

.frame:hover {
  border-color: #858791;
}

.frame:focus-within {
  border-color: #303030;
  outline: none;
}

.text {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  color: #303030;
  background: transparent;
  border: none;
  outline: none;
  width: 100%;
  flex: 1;
  order: 1;
  flex-grow: 1;
}

.text::placeholder {
  color: #858791;
}

/* Dark mode styles */
.text-box.dark .text-wrapper {
  color: #E7E7E9;
}

.text-box.dark .frame {
  background: #0C0F24;
  border-color: #3D3F50;
}

.text-box.dark .frame:hover {
  border-color: #858791;
}

.text-box.dark .frame:focus-within {
  border-color: #496DAF;
}

.text-box.dark .text {
  color: #FFFFFF;
}

.text-box.dark .text::placeholder {
  color: #858791;
}

/* Error states */
.text-box.error .text-wrapper {
  color: #DC2626;
}

.text-box.error .frame {
  border-color: #DC2626;
}

.text-box.dark.error .text-wrapper {
  color: #FB7185;
}

.text-box.dark.error .frame {
  border-color: #FB7185;
}

/* Disabled states */
.text-box.disabled .frame {
  background: #F3F4F6;
  border-color: #D1D5DB;
  cursor: not-allowed;
}

.text-box.disabled .text {
  color: #9CA3AF;
  cursor: not-allowed;
}

.text-box.dark.disabled .frame {
  background: #1F2937;
  border-color: #374151;
}

.text-box.dark.disabled .text {
  color: #6B7280;
}
```

## 2. Button Component

### Component Code (Button.tsx)
```typescript
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
```

### Button Styles (Button.css)
```css
.btn {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 6px;
  border-radius: 8px;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-align: center;
}

/* Primary Variant */
.btn-primary.btn-solid {
  background-color: #1B489B;
  color: #FFFFFF;
}

.btn-primary.btn-solid:hover {
  background: linear-gradient(90deg, #0C2B64 0%, #1B489B 100%);
}

.btn-primary.btn-outline {
  background-color: transparent;
  border: 1px solid #1B489B;
  color: #1B489B;
}

.btn-primary.btn-outline:hover {
  background: linear-gradient(90deg, #0C2B64 0%, #1B489B 100%);
  color: #FFFFFF;
  border-color: transparent;
}

.btn-primary.btn-ghost {
  background-color: transparent;
  color: #1B489B;
  border: none;
}

.btn-primary.btn-ghost:hover {
  background: linear-gradient(90deg, rgba(12, 43, 100, 0.1) 0%, rgba(27, 72, 155, 0.1) 100%);
}

/* Secondary Variant */
.btn-secondary.btn-solid {
  background-color: #0C0F24;
  color: #FFFFFF;
}

.btn-secondary.btn-solid:hover {
  background: linear-gradient(90deg, #000000 0%, #0C0F24 100%);
}

.btn-secondary.btn-outline {
  background-color: transparent;
  border: 1px solid #0C0F24;
  color: #0C0F24;
}

.btn-secondary.btn-outline:hover {
  background: linear-gradient(90deg, #000000 0%, #0C0F24 100%);
  color: #FFFFFF;
  border-color: transparent;
}

.btn-secondary.btn-ghost {
  background-color: transparent;
  color: #0C0F24;
  border: none;
}

.btn-secondary.btn-ghost:hover {
  background: linear-gradient(90deg, rgba(0, 0, 0, 0.1) 0%, rgba(12, 15, 36, 0.1) 100%);
}

/* Success Variant */
.btn-success.btn-solid {
  background-color: #1E774A;
  color: #FFFFFF;
}

.btn-success.btn-solid:hover {
  background: linear-gradient(90deg, #0F3D25 0%, #1E774A 100%);
}

.btn-success.btn-outline {
  background-color: transparent;
  border: 1px solid #1E774A;
  color: #1E774A;
}

.btn-success.btn-outline:hover {
  background: linear-gradient(90deg, #0F3D25 0%, #1E774A 100%);
  color: #FFFFFF;
  border-color: transparent;
}

.btn-success.btn-ghost {
  background-color: transparent;
  color: #1E774A;
  border: none;
}

.btn-success.btn-ghost:hover {
  background: linear-gradient(90deg, rgba(15, 61, 37, 0.1) 0%, rgba(30, 119, 74, 0.1) 100%);
}

/* Warning Variant */
.btn-warning.btn-solid {
  background-color: #895D0B;
  color: #FFFFFF;
}

.btn-warning.btn-solid:hover {
  background: linear-gradient(90deg, #4A3206 0%, #895D0B 100%);
}

.btn-warning.btn-outline {
  background-color: transparent;
  border: 1px solid #895D0B;
  color: #895D0B;
}

.btn-warning.btn-outline:hover {
  background: linear-gradient(90deg, #4A3206 0%, #895D0B 100%);
  color: #FFFFFF;
  border-color: transparent;
}

.btn-warning.btn-ghost {
  background-color: transparent;
  color: #895D0B;
  border: none;
}

.btn-warning.btn-ghost:hover {
  background: linear-gradient(90deg, rgba(74, 50, 6, 0.1) 0%, rgba(137, 93, 11, 0.1) 100%);
}

/* Sizes */
.btn-small {
  padding: 6px 12px;
  font-size: 14px;
  line-height: 20px;
  min-width: 80px;
  height: 32px;
}

.btn-base {
  padding: 8px 16px;
  font-size: 16px;
  line-height: 24px;
  min-width: 100px;
  height: 40px;
}

.btn-large {
  padding: 12px 20px;
  font-size: 18px;
  line-height: 24px;
  min-width: 120px;
  height: 48px;
}

/* Button text */
.btn-text {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Icons */
.btn-icon {
  flex: none;
  flex-grow: 0;
}

.btn-icon-left {
  order: 0;
}

.btn-icon-right {
  order: 2;
}

/* States */
.btn-disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.btn-disabled:hover {
  background: inherit !important;
  color: inherit !important;
  border-color: inherit !important;
}
```

## 3. ExpCheckbox Component

### Component Code (ExpCheckbox.tsx)
```typescript
import React, { useState } from "react";
import "./ExpCheckbox.css";

interface ExpCheckboxProps {
  label?: string;
  checked?: boolean;
  disabled?: boolean;
  intermediate?: boolean;
  dark?: boolean;
  onChange?: (value: boolean) => void;
}

export const ExpCheckbox: React.FC<ExpCheckboxProps> = ({
  label = "Label",
  checked = false,
  disabled = false,
  intermediate = false,
  dark = false,
  onChange,
}) => {
  const [value, setValue] = useState(checked);

  const handleClick = () => {
    if (disabled) return;
    const newValue = !value;
    setValue(newValue);
    onChange?.(newValue);
  };

  const getClassName = () => {
    let base = "exp-checkbox";
    if (dark) base += " dark";
    if (disabled) base += " disabled";
    else if (intermediate) base += " intermediate";
    else if (value) base += " checked";
    return base;
  };

  return (
    <div className={getClassName()} onClick={handleClick}>
      <div className="box">
        {intermediate && !value ? <div className="dash" /> : null}
        {value && !intermediate ? <div className="tick" /> : null}
      </div>
      <span className="label">{label}</span>
    </div>
  );
};
```

### ExpCheckbox Styles (ExpCheckbox.css)
```css
.exp-checkbox {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  line-height: 24px;
  color: #0C0F24;
}

.exp-checkbox .box {
  width: 24px;
  height: 24px;
  border: 1px solid #0C0F24;
  border-radius: 4px;
  position: relative;
  background-color: white;
}

.exp-checkbox.checked .box {
  background-color: #1B489B;
  border: none;
}

.exp-checkbox.checked .tick {
  width: 10px;
  height: 8px;
  background-color: white;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.exp-checkbox.intermediate .dash {
  width: 10px;
  height: 2px;
  background-color: #1B489B;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.exp-checkbox.disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

.exp-checkbox.dark {
  color: #ffffff;
}

.exp-checkbox.dark .box {
  border: 1px solid #ffffff;
  background-color: transparent;
}

.exp-checkbox.checked.dark .box {
  background-color: #ffffff;
}

.exp-checkbox.checked.dark .tick {
  background-color: #0C0F24;
}
```

## 4. ExpRadio Component

### Component Code (ExpRadio.tsx)
```typescript
import React from "react";
import "./ExpRadio.css";

interface ExpRadioProps {
  label?: string;
  value: string | number;
  groupValue?: string | number;
  onChange: (value: string | number) => void;
  disabled?: boolean;
  dark?: boolean;
  hasError?: boolean;
}

export const ExpRadio: React.FC<ExpRadioProps> = ({
  label = "Option",
  value,
  groupValue,
  onChange,
  disabled = false,
  dark = false,
  hasError = false,
}) => {
  const isSelected = value === groupValue;

  const getClassName = () => {
    let base = "exp-radio";
    if (dark) base += " dark";
    if (disabled) base += " disabled";
    if (isSelected) base += " selected";
    if (hasError) base += " error";
    return base;
  };

  return (
    <div className={getClassName()} onClick={() => !disabled && onChange(value)}>
      <div className="radio-circle">
        {isSelected && <div className="dot" />}
      </div>
      <span className="label">{label}</span>
    </div>
  );
};
```

### ExpRadio Styles (ExpRadio.css)
```css
.exp-radio {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  color: #303030;
}

.exp-radio .radio-circle {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 1px solid #303030;
  display: flex;
  align-items: center;
  justify-content: center;
}

.exp-radio.selected .radio-circle {
  border: 1px solid #1B489B;
}

.exp-radio.selected .dot {
  width: 10px;
  height: 10px;
  background: #1B489B;
  border-radius: 50%;
}

.exp-radio.disabled {
  cursor: not-allowed;
  color: #858791;
}

.exp-radio.disabled .radio-circle {
  border: 1px solid #CECFD3;
}

.exp-radio.disabled.selected .dot {
  background: #CECFD3;
}

.exp-radio.dark {
  color: #FFFFFF;
}

.exp-radio.dark .radio-circle {
  border: 1px solid #FFFFFF;
}

.exp-radio.dark.selected .dot {
  background: #FFFFFF;
}

.exp-radio.error .radio-circle {
  border: 1px solid red;
}
```

## 5. CheckboxTile Component

### Component Code (CheckboxTile.tsx)
```typescript
import React, { useState } from "react";
import { cn } from "@/lib/utils";

interface CheckboxTileProps {
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
  className?: string;
}

export const CheckboxTile: React.FC<CheckboxTileProps> = ({
  title = "Option Title",
  description = "Option description goes here",
  icon,
  checked = false,
  disabled = false,
  onChange,
  className,
}) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleClick = () => {
    if (disabled) return;
    const newValue = !isChecked;
    setIsChecked(newValue);
    onChange?.(newValue);
  };

  return (
    <div
      className={cn(
        "border rounded-lg p-4 cursor-pointer transition-all",
        isChecked 
          ? "border-[#1B489B] bg-[#E9ECF4]" 
          : "border-[#CECFD3] hover:border-[#858791]",
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
      onClick={handleClick}
    >
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 mt-1">
          <div
            className={cn(
              "w-5 h-5 border-2 rounded flex items-center justify-center",
              isChecked 
                ? "border-[#1B489B] bg-[#1B489B]" 
                : "border-[#CECFD3]"
            )}
          >
            {isChecked && (
              <svg
                className="w-3 h-3 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </div>
        </div>
        
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            {icon && <div className="flex-shrink-0">{icon}</div>}
            <h3 className="font-medium text-[#303030]">{title}</h3>
          </div>
          <p className="text-sm text-[#858791]">{description}</p>
        </div>
      </div>
    </div>
  );
};
```

## 6. ExpStepper Component

### Component Code (ExpStepper.tsx)
```typescript
import React from "react";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

interface ExpStepperProps {
  titles: string[];
  subtitles?: (string | null)[];
  completedCount?: number;
  currentStep?: number;
  isVertical?: boolean;
  isDarkMode?: boolean;
  className?: string;
  onStepClick?: (step: number) => void;
}

export const ExpStepper: React.FC<ExpStepperProps> = ({
  titles,
  subtitles = [],
  completedCount = 0,
  currentStep,
  isVertical = false,
  isDarkMode = false,
  className,
  onStepClick,
}) => {
  const getStepStatus = (index: number) => {
    if (index < completedCount) return "completed";
    if (currentStep !== undefined && index === currentStep) return "current";
    return "pending";
  };

  const getStepClasses = (status: string) => {
    const baseClasses = "flex items-center justify-center w-8 h-8 rounded-full border-2 font-medium text-sm transition-all";
    
    switch (status) {
      case "completed":
        return cn(
          baseClasses,
          isDarkMode 
            ? "bg-[#496DAF] border-[#496DAF] text-white" 
            : "bg-[#1B489B] border-[#1B489B] text-white"
        );
      case "current":
        return cn(
          baseClasses,
          isDarkMode
            ? "bg-[#0C0F24] border-[#496DAF] text-[#496DAF]"
            : "bg-white border-[#1B489B] text-[#1B489B]"
        );
      default:
        return cn(
          baseClasses,
          isDarkMode
            ? "bg-[#0C0F24] border-[#3D3F50] text-[#858791]"
            : "bg-white border-[#CECFD3] text-[#858791]"
        );
    }
  };

  const getConnectorClasses = (index: number) => {
    const isCompleted = index < completedCount;
    const baseClasses = isVertical ? "w-0.5 h-8 mx-auto" : "h-0.5 flex-1";
    
    return cn(
      baseClasses,
      isCompleted
        ? isDarkMode ? "bg-[#496DAF]" : "bg-[#1B489B]"
        : isDarkMode ? "bg-[#3D3F50]" : "bg-[#CECFD3]"
    );
  };

  const renderStep = (title: string, index: number) => {
    const status = getStepStatus(index);
    const subtitle = subtitles[index];
    
    return (
      <div
        key={index}
        className={cn(
          "flex items-center",
          isVertical ? "flex-col" : "flex-row",
          onStepClick && "cursor-pointer"
        )}
        onClick={() => onStepClick?.(index)}
      >
        <div className={cn("flex items-center", isVertical ? "flex-col" : "flex-row")}>
          <div className={getStepClasses(status)}>
            {status === "completed" ? (
              <Check className="w-4 h-4" />
            ) : (
              <span>{index + 1}</span>
            )}
          </div>
          
          <div className={cn("ml-3", isVertical && "mt-2 text-center")}>
            <div className={cn(
              "font-medium",
              isDarkMode ? "text-[#E7E7E9]" : "text-[#303030]"
            )}>
              {title}
            </div>
            {subtitle && (
              <div className={cn(
                "text-sm mt-1",
                isDarkMode ? "text-[#858791]" : "text-[#858791]"
              )}>
                {subtitle}
              </div>
            )}
          </div>
        </div>
        
        {index < titles.length - 1 && (
          <div className={getConnectorClasses(index)} />
        )}
      </div>
    );
  };

  return (
    <div className={cn(
      "flex",
      isVertical ? "flex-col space-y-4" : "flex-row items-center space-x-4",
      className
    )}>
      {titles.map((title, index) => renderStep(title, index))}
    </div>
  );
};
```

## 7. TagsComponent

### Component Code (TagsComponent.tsx)
```typescript
import React from "react";
import "./tags-component.css";

interface TagProps {
  text: string;
  variant?: "default" | "status" | "interactive";
  status?: "success" | "warning" | "error" | "info";
  size?: "small" | "medium" | "large";
  removable?: boolean;
  onClick?: () => void;
  onRemove?: () => void;
}

export const TagsComponent: React.FC<TagProps> = ({
  text,
  variant = "default",
  status = "info",
  size = "medium",
  removable = false,
  onClick,
  onRemove,
}) => {
  const getTagClasses = () => {
    let classes = `tag tag-${size}`;
    
    if (variant === "status") {
      classes += ` tag-status-${status}`;
    } else if (variant === "interactive") {
      classes += " tag-interactive";
    } else {
      classes += " tag-default";
    }
    
    if (onClick) {
      classes += " tag-clickable";
    }
    
    return classes;
  };

  return (
    <div className={getTagClasses()} onClick={onClick}>
      <span className="tag-text">{text}</span>
      {removable && (
        <button
          className="tag-remove"
          onClick={(e) => {
            e.stopPropagation();
            onRemove?.();
          }}
        >
          ×
        </button>
      )}
    </div>
  );
};
```

### TagsComponent Styles (tags-component.css)
```css
.tag {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  border-radius: 16px;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  white-space: nowrap;
  transition: all 0.2s ease-in-out;
}

/* Sizes */
.tag-small {
  padding: 2px 8px;
  font-size: 12px;
  line-height: 16px;
}

.tag-medium {
  padding: 4px 12px;
  font-size: 14px;
  line-height: 20px;
}

.tag-large {
  padding: 6px 16px;
  font-size: 16px;
  line-height: 24px;
}

/* Default variant */
.tag-default {
  background-color: #E7E7E9;
  color: #303030;
  border: 1px solid #CECFD3;
}

/* Status variants */
.tag-status-success {
  background-color: #CCF2DB;
  color: #1E774A;
  border: 1px solid #1E774A;
}

.tag-status-warning {
  background-color: #FFE1A4;
  color: #895D0B;
  border: 1px solid #895D0B;
}

.tag-status-error {
  background-color: #FEE2E2;
  color: #DC2626;
  border: 1px solid #DC2626;
}

.tag-status-info {
  background-color: #E9ECF4;
  color: #1B489B;
  border: 1px solid #1B489B;
}

/* Interactive variant */
.tag-interactive {
  background-color: #1B489B;
  color: #FFFFFF;
  border: 1px solid #1B489B;
}

.tag-interactive:hover {
  background-color: #0C2B64;
}

/* Clickable state */
.tag-clickable {
  cursor: pointer;
}

.tag-clickable:hover {
  transform: translateY(-1px);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* Remove button */
.tag-remove {
  background: none;
  border: none;
  color: inherit;
  cursor: pointer;
  font-size: 16px;
  line-height: 1;
  padding: 0;
  margin-left: 4px;
  border-radius: 50%;
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.7;
  transition: opacity 0.2s ease-in-out;
}

.tag-remove:hover {
  opacity: 1;
  background-color: rgba(0, 0, 0, 0.1);
}

.tag-text {
  flex: 1;
}
```

## 8. Navigation Components

### ResponsiveHeader Component (ResponsiveHeader.tsx)
```typescript
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavigationItem {
  title: string;
  href: string;
  isActive?: boolean;
}

interface ResponsiveHeaderProps {
  logo?: React.ReactNode;
  navigation?: NavigationItem[];
  actions?: React.ReactNode;
  className?: string;
}

export const ResponsiveHeader: React.FC<ResponsiveHeaderProps> = ({
  logo,
  navigation = [],
  actions,
  className,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className={cn("bg-white shadow-sm border-b", className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            {logo}
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className={cn(
                  "px-3 py-2 text-sm font-medium transition-colors",
                  item.isActive
                    ? "text-[#1B489B] border-b-2 border-[#1B489B]"
                    : "text-[#303030] hover:text-[#1B489B]"
                )}
              >
                {item.title}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {actions}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-[#303030] hover:text-[#1B489B] p-2"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-[#CECFD3] py-4">
            <nav className="space-y-2">
              {navigation.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className={cn(
                    "block px-3 py-2 text-base font-medium rounded-md transition-colors",
                    item.isActive
                      ? "text-[#1B489B] bg-[#E9ECF4]"
                      : "text-[#303030] hover:text-[#1B489B] hover:bg-[#E9ECF4]"
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.title}
                </a>
              ))}
              {actions && (
                <div className="pt-4 mt-4 border-t border-[#CECFD3]">
                  {actions}
                </div>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
```

### PageHeader Component (PageHeader.tsx)
```typescript
import React from "react";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";

interface PageHeaderProps {
  title: string;
  description?: string;
  badge?: string;
  breadcrumbs?: Array<{
    title: string;
    href?: string;
  }>;
  actions?: React.ReactNode;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  description,
  badge,
  breadcrumbs = [],
  actions,
}) => {
  return (
    <div className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between">
          <div>
            {breadcrumbs.length > 0 && (
              <Breadcrumb className="mb-4">
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <Link to="/">Design System</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  {breadcrumbs.map((crumb, index) => (
                    <React.Fragment key={crumb.title}>
                      <BreadcrumbItem>
                        {crumb.href ? (
                          <BreadcrumbLink asChild>
                            <Link to={crumb.href}>{crumb.title}</Link>
                          </BreadcrumbLink>
                        ) : (
                          <BreadcrumbPage>{crumb.title}</BreadcrumbPage>
                        )}
                      </BreadcrumbItem>
                      {index < breadcrumbs.length - 1 && <BreadcrumbSeparator />}
                    </React.Fragment>
                  ))}
                </BreadcrumbList>
              </Breadcrumb>
            )}
            <h1 className="text-4xl font-bold text-gray-900">{title}</h1>
            {description && (
              <p className="text-lg text-gray-600 mt-2">{description}</p>
            )}
          </div>
          <div className="flex items-center gap-4">
            {badge && (
              <Badge variant="secondary" className="text-sm px-4 py-2">
                {badge}
              </Badge>
            )}
            {actions}
          </div>
        </div>
      </div>
    </div>
  );
};
```

## 9. Required Utility Functions

### Utils Function (lib/utils.ts)
```typescript
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

## 10. Design System Tokens

### Colors (design-system/tokens/colors.ts)
```typescript
export const colorPalette = {
  primary: {
    500: '#1B489B',
    400: '#496DAF', 
    300: '#93A3CB',
    200: '#D4DAEA',
    100: '#E9ECF4'
  },
  secondary: {
    500: '#0C0F24',
    400: '#3D3F50',
    300: '#858791', 
    200: '#CECFD3',
    100: '#E7E7E9'
  },
  status: {
    success: '#1E774A',
    successLight: '#CCF2DB',
    warning: '#895D0B',
    warningLight: '#FFE1A4',
    error: '#DC2626',
    errorLight: '#FEE2E2'
  },
  base: {
    white: '#FFFFFF',
    black: '#303030',
    disabled: '#858791',
    hover: '#496DAF'
  }
} as const;
```

### Typography (design-system/tokens/typography.ts)
```typescript
export const typography = {
  fontFamily: {
    sans: ['Roboto', 'ui-sans-serif', 'system-ui', 'sans-serif'],
  },
  fontSize: {
    xs: '12px',
    sm: '14px',
    base: '16px',
    lg: '18px',
    xl: '20px',
    '2xl': '24px',
    '3xl': '30px',
    '4xl': '36px',
  },
  fontWeight: {
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },
  lineHeight: {
    tight: '1.25',
    normal: '1.5',
    relaxed: '1.75',
  },
  letterSpacing: {
    normal: '0',
    wide: '0.025em',
    wider: '0.05em',
  }
} as const;
```

### Spacing (design-system/tokens/spacing.ts)
```typescript
export const spacing = {
  xs: '4px',
  sm: '8px',
  md: '12px',
  lg: '16px',
  xl: '20px',
  '2xl': '24px',
  '3xl': '32px',
  '4xl': '48px',
  '5xl': '64px',
} as const;

export const borderRadius = {
  sm: '4px',
  md: '8px',
  lg: '12px',
  xl: '16px',
  full: '9999px',
} as const;
```

## 11. Main Export File (design-system/index.ts)

```typescript
// Design System Main Export File

// Core Design Tokens
export * from './tokens/colors';
export * from './tokens/typography';
export * from './tokens/spacing';

// Component Exports
export { Button } from '../components/button/Button';
export { ExpInputField } from '../components/input/ExpInputField';
export { ExpCheckbox } from '../components/checkbox/ExpCheckbox';
export { ExpRadio } from '../components/checkbox/ExpRadio';
export { CheckboxTile } from '../components/checkbox/CheckboxTile';
export { ExpStepper } from '../components/stepper/ExpStepper';
export { TagsComponent } from '../components/tags/TagsComponent';
export { ResponsiveHeader } from '../components/navigation/ResponsiveHeader';
export { PageHeader } from '../components/navigation/PageHeader';

// Design System Configuration
export { colorPalette } from './tokens/colors';
```

## 12. Installation Instructions

### Step 1: Create Required Files
Create these files in your new Lovable project:

```
src/
├── lib/
│   └── utils.ts
├── components/
│   ├── input/
│   │   ├── ExpInputField.tsx
│   │   └── ExpInputField.css
│   ├── button/
│   │   ├── Button.tsx
│   │   └── Button.css
│   ├── checkbox/
│   │   ├── ExpCheckbox.tsx
│   │   ├── ExpCheckbox.css
│   │   ├── ExpRadio.tsx
│   │   ├── ExpRadio.css
│   │   └── CheckboxTile.tsx
│   ├── stepper/
│   │   └── ExpStepper.tsx
│   ├── tags/
│   │   ├── TagsComponent.tsx
│   │   └── tags-component.css
│   └── navigation/
│       ├── ResponsiveHeader.tsx
│       └── PageHeader.tsx
└── design-system/
    ├── index.ts
    └── tokens/
        ├── colors.ts
        ├── typography.ts
        └── spacing.ts
```

### Step 2: Install Required Dependencies
Most dependencies are included by default in Lovable projects:
- `lucide-react` (for icons)
- `clsx` (for className utilities)
- `tailwind-merge` (for merging Tailwind classes)
- `react-router-dom` (for navigation)

### Step 3: Add Roboto Font
Add this to your `index.html` in the `<head>` section:
```html
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;600&display=swap" rel="stylesheet">
```

### Step 4: Import and Use Components
```typescript
import { 
  Button, 
  ExpInputField, 
  ExpCheckbox, 
  ExpRadio, 
  CheckboxTile,
  ExpStepper,
  TagsComponent,
  ResponsiveHeader,
  PageHeader
} from '@/design-system';
```

## 13. Usage Examples

### Form Example with Multiple Components
```typescript
import React, { useState } from 'react';
import { 
  ExpInputField, 
  Button, 
  ExpCheckbox, 
  ExpRadio,
  TagsComponent 
} from '@/design-system';

const ExampleForm = () => {
  const [email, setEmail] = useState('');
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  return (
    <div className="p-6 space-y-6 max-w-md">
      <ExpInputField
        label="Email Address"
        hint="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        height={48}
      />
      
      <div className="space-y-3">
        <ExpRadio
          label="Option 1"
          value="option1"
          groupValue={selectedOption}
          onChange={setSelectedOption}
        />
        <ExpRadio
          label="Option 2"
          value="option2"
          groupValue={selectedOption}
          onChange={setSelectedOption}
        />
      </div>
      
      <ExpCheckbox
        label="I agree to the terms and conditions"
        checked={agreeToTerms}
        onChange={setAgreeToTerms}
      />
      
      <TagsComponent
        text="Selected"
        variant="status"
        status="success"
      />
      
      <Button
        label="Submit"
        variant="primary"
        styleType="solid"
        size="base"
        onClick={() => console.log('Form submitted!')}
      />
    </div>
  );
};
```

### Navigation Example
```typescript
import React from 'react';
import { ResponsiveHeader, PageHeader, Button } from '@/design-system';

const App = () => {
  const navigation = [
    { title: 'Home', href: '/', isActive: true },
    { title: 'About', href: '/about' },
    { title: 'Contact', href: '/contact' },
  ];

  return (
    <div>
      <ResponsiveHeader
        logo={<div className="text-xl font-bold">Logo</div>}
        navigation={navigation}
        actions={
          <Button
            label="Sign In"
            variant="primary"
            styleType="outline"
            size="small"
          />
        }
      />
      
      <PageHeader
        title="Page Title"
        description="Page description goes here"
        badge="Component"
        breadcrumbs={[
          { title: 'Section', href: '/section' },
          { title: 'Current Page' }
        ]}
      />
    </div>
  );
};
```

### Stepper Example
```typescript
import React, { useState } from 'react';
import { ExpStepper, Button } from '@/design-system';

const StepperExample = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [completedCount, setCompletedCount] = useState(0);

  const steps = ['Personal Info', 'Account Setup', 'Verification', 'Complete'];
  const subtitles = ['Basic details', 'Create account', 'Verify email', 'All done!'];

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCompletedCount(currentStep + 1);
      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <div className="p-6">
      <ExpStepper
        titles={steps}
        subtitles={subtitles}
        completedCount={completedCount}
        currentStep={currentStep}
        isVertical={false}
        onStepClick={(step) => console.log('Step clicked:', step)}
      />
      
      <div className="mt-8">
        <Button
          label="Next Step"
          variant="primary"
          styleType="solid"
          onClick={nextStep}
          disabled={currentStep >= steps.length - 1}
        />
      </div>
    </div>
  );
};
```

## 14. Component Props Reference

### ExpInputField Props
```typescript
interface ExpInputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  hint?: string;                    // Placeholder text
  label?: string;                   // Label text
  labelTextStyle?: string;          // Custom CSS class for label
  isDarkMode?: boolean;             // Enable dark theme
  borderRadius?: number;            // Custom border radius
  isDense?: boolean;                // Compact mode
  hasError?: boolean;               // Show error state
  height?: number;                  // Input height
  suffixIcon?: React.ReactNode;     // Icon on the right
  validator?: (value: string) => string | undefined;
  onSubmittedAction?: (value: string) => void;
  ignorePointers?: boolean;         // Disable pointer events
  showLabel?: boolean;              // Show/hide label
  showPlaceholder?: boolean;        // Show/hide placeholder
}
```

### Button Props
```typescript
interface ButtonProps {
  label?: string;                   // Button text
  variant?: "primary" | "secondary" | "success" | "warning";
  size?: "small" | "base" | "large";
  styleType?: "solid" | "outline" | "ghost";
  state?: "default" | "hover" | "disabled";
  showLeftIcon?: boolean;           // Show left icon
  showRightIcon?: boolean;          // Show right icon
  onClick?: () => void;             // Click handler
}
```

### ExpCheckbox Props
```typescript
interface ExpCheckboxProps {
  label?: string;                   // Checkbox label
  checked?: boolean;                // Initial checked state
  disabled?: boolean;               // Disable interaction
  intermediate?: boolean;           // Show intermediate state
  dark?: boolean;                   // Dark theme
  onChange?: (value: boolean) => void; // Change handler
}
```

### ExpRadio Props
```typescript
interface ExpRadioProps {
  label?: string;                   // Radio label
  value: string | number;           // Radio value
  groupValue?: string | number;     // Currently selected value
  onChange: (value: string | number) => void; // Change handler
  disabled?: boolean;               // Disable interaction
  dark?: boolean;                   // Dark theme
  hasError?: boolean;               // Error state
}
```

### CheckboxTile Props
```typescript
interface CheckboxTileProps {
  title?: string;                   // Tile title
  description?: string;             // Tile description
  icon?: React.ReactNode;           // Optional icon
  checked?: boolean;                // Initial checked state
  disabled?: boolean;               // Disable interaction
  onChange?: (checked: boolean) => void; // Change handler
  className?: string;               // Additional CSS classes
}
```

### ExpStepper Props
```typescript
interface ExpStepperProps {
  titles: string[];                 // Step titles (required)
  subtitles?: (string | null)[];    // Step subtitles
  completedCount?: number;          // Number of completed steps
  currentStep?: number;             // Currently active step
  isVertical?: boolean;             // Vertical layout
  isDarkMode?: boolean;             // Dark theme
  className?: string;               // Additional CSS classes
  onStepClick?: (step: number) => void; // Step click handler
}
```

### TagsComponent Props
```typescript
interface TagProps {
  text: string;                     // Tag text (required)
  variant?: "default" | "status" | "interactive";
  status?: "success" | "warning" | "error" | "info";
  size?: "small" | "medium" | "large";
  removable?: boolean;              // Show remove button
  onClick?: () => void;             // Click handler
  onRemove?: () => void;            // Remove handler
}
```

## 15. Troubleshooting

### Common Issues and Solutions

1. **"Cannot find module '@/lib/utils'" Error**
   - Make sure you have created the `src/lib/utils.ts` file
   - Ensure your `tsconfig.json` has the path mapping for `@/*`

2. **"clsx is not defined" Error**
   - clsx should be available in Lovable projects by default
   - If not available, you can create a simple alternative

3. **Font not loading**
   - Make sure you added the Google Fonts link to your `index.html`
   - Check that the font family name matches exactly: 'Roboto'

4. **CSS styles not applying**
   - Ensure you're importing the CSS files in your components
   - Check that the CSS file paths are correct

5. **Icons not showing**
   - Verify that `lucide-react` is installed (included by default)
   - Import the specific icons you need

### Alternative Utils Function (if needed)
```typescript
// Simple alternative to clsx if not available
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}
```

## 16. Best Practices

1. **Consistency**: Always use design system components instead of custom implementations
2. **Theming**: Use the provided color tokens instead of hardcoded colors
3. **Accessibility**: Components include ARIA labels and keyboard navigation
4. **Responsive**: All components are designed to work across device sizes
5. **Documentation**: Keep component usage examples updated

This comprehensive documentation provides everything needed to implement the complete design system in a new Lovable project. Copy this entire document to your project's knowledge section to inherit all components.
