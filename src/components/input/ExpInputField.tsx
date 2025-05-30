
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

    // Base styles matching the design system
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
