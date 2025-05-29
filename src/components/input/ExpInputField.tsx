
import React, { forwardRef } from 'react';
import { cn } from '@/lib/utils';

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
    height,
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

    // Base styles matching the design system
    const containerClasses = cn(
      "text-box",
      className
    );

    const labelClasses = cn(
      "text-wrapper",
      hasError && "text-red-500",
      isDarkMode && hasError && "text-orange-400",
      isDarkMode && !hasError && "text-blue-400",
      labelTextStyle
    );

    const frameClasses = cn(
      "frame",
      hasError && "border-red-500",
      isDarkMode && hasError && "border-orange-400 bg-gray-900",
      isDarkMode && !hasError && "border-gray-600 bg-gray-900 hover:border-gray-500",
      isDarkMode && "focus-within:border-blue-400",
      !isDarkMode && !hasError && "hover:border-gray-400 focus-within:border-gray-900",
      disabled && "bg-gray-100 cursor-not-allowed border-gray-300",
      isDarkMode && disabled && "bg-gray-800 border-gray-600",
      "transition-colors focus-within:outline-none"
    );

    const inputClasses = cn(
      "text",
      "border-0 outline-none bg-transparent w-full",
      isDarkMode && "text-white placeholder:text-gray-400",
      !isDarkMode && "text-gray-900 placeholder:text-gray-500",
      disabled && "cursor-not-allowed"
    );

    return (
      <div className={containerClasses} style={{ height: containerHeight, ...style }}>
        {showLabel && (
          <div className="label-t">
            <div className={labelClasses}>
              {label}
            </div>
          </div>
        )}
        
        <div className={frameClasses}>
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
