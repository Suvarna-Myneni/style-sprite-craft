
import React, { forwardRef } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import { colorPalette } from '@/design-system/tokens/colors';

interface ExpInputFieldProps extends React.ComponentProps<typeof Input> {
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
}

// Abstract decorator interface
interface InputFieldDecorator {
  createInputStyles(props: {
    hasError: boolean;
    isDarkMode: boolean;
    enabled?: boolean;
    borderRadius?: number;
    isDense?: boolean;
  }): string;
  
  createLabelStyles(props: {
    hasError: boolean;
    isDarkMode: boolean;
  }): string;
}

// Light theme decorator
class LightInputFieldDecorator implements InputFieldDecorator {
  createInputStyles({ hasError, enabled = true, borderRadius = 8, isDense }: {
    hasError: boolean;
    isDarkMode: boolean;
    enabled?: boolean;
    borderRadius?: number;
    isDense?: boolean;
  }): string {
    const baseClasses = [
      'border',
      'transition-colors',
      'focus-visible:outline-none',
      'focus-visible:ring-1',
      isDense ? 'px-3 py-1' : 'px-4 py-2',
    ];

    if (!enabled) {
      baseClasses.push('bg-gray-100', 'cursor-not-allowed', 'border-gray-300');
    } else if (hasError) {
      baseClasses.push(
        'border-red-500',
        'focus-visible:ring-red-500',
        'focus-visible:border-red-500'
      );
    } else {
      baseClasses.push(
        'border-gray-300',
        'focus-visible:ring-gray-900',
        'focus-visible:border-gray-900',
        'hover:border-gray-400'
      );
    }

    baseClasses.push(`rounded-[${borderRadius}px]`);
    
    return baseClasses.join(' ');
  }

  createLabelStyles({ hasError }: { hasError: boolean; isDarkMode: boolean }): string {
    return cn(
      'text-sm font-normal',
      hasError ? 'text-red-500' : 'text-gray-900'
    );
  }
}

// Dark theme decorator
class DarkInputFieldDecorator implements InputFieldDecorator {
  createInputStyles({ hasError, enabled = true, borderRadius = 8, isDense }: {
    hasError: boolean;
    isDarkMode: boolean;
    enabled?: boolean;
    borderRadius?: number;
    isDense?: boolean;
  }): string {
    const baseClasses = [
      'border',
      'transition-colors',
      'focus-visible:outline-none',
      'focus-visible:ring-1',
      'bg-gray-900',
      'text-white',
      isDense ? 'px-3 py-1' : 'px-4 py-2',
    ];

    if (!enabled) {
      baseClasses.push('bg-gray-800', 'cursor-not-allowed', 'border-gray-600');
    } else if (hasError) {
      baseClasses.push(
        'border-orange-400',
        'focus-visible:ring-orange-400',
        'focus-visible:border-orange-400'
      );
    } else {
      baseClasses.push(
        'border-gray-600',
        'focus-visible:ring-blue-400',
        'focus-visible:border-blue-400',
        'hover:border-gray-500'
      );
    }

    baseClasses.push(`rounded-[${borderRadius}px]`);
    
    return baseClasses.join(' ');
  }

  createLabelStyles({ hasError, isDarkMode }: { hasError: boolean; isDarkMode: boolean }): string {
    return cn(
      'text-sm font-normal',
      hasError 
        ? 'text-orange-400' 
        : isDarkMode 
          ? 'text-blue-400' 
          : 'text-gray-400'
    );
  }
}

// Factory for creating decorators
class InputFieldFactory {
  getInputFieldDecorator(isDarkMode: boolean): InputFieldDecorator {
    return isDarkMode ? new DarkInputFieldDecorator() : new LightInputFieldDecorator();
  }
}

const ExpInputField = forwardRef<HTMLInputElement, ExpInputFieldProps>(
  ({ 
    hint,
    label,
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
    ...props 
  }, ref) => {
    const factory = new InputFieldFactory();
    const decorator = factory.getInputFieldDecorator(isDarkMode);
    
    const inputStyles = decorator.createInputStyles({
      hasError,
      isDarkMode,
      enabled: !disabled,
      borderRadius,
      isDense
    });
    
    const labelStyles = decorator.createLabelStyles({
      hasError,
      isDarkMode
    });

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter' && onSubmittedAction) {
        onSubmittedAction((e.target as HTMLInputElement).value);
      }
      onKeyDown?.(e);
    };

    const containerHeight = hasError && height ? height + 17 : height;

    return (
      <div className="flex flex-col space-y-1">
        {label && (
          <Label className={cn(labelStyles, labelTextStyle)}>
            {label}
          </Label>
        )}
        <div 
          className="relative"
          style={{ height: containerHeight }}
        >
          <Input
            ref={ref}
            placeholder={hint}
            disabled={disabled || ignorePointers}
            className={cn(inputStyles, className)}
            style={style}
            onKeyDown={handleKeyDown}
            {...props}
          />
          {suffixIcon && (
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              {suffixIcon}
            </div>
          )}
        </div>
        {hasError && validator && (
          <span className={cn(
            'text-xs font-normal',
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
