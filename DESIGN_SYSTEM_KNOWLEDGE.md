
# Design System Components Knowledge Base

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

## 3. Required Utility Functions

### Utils Function (lib/utils.ts)
```typescript
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

## 4. Design System Tokens

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
    warningLight: '#FFE1A4'
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

## 5. Installation Instructions

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
│   └── button/
│       ├── Button.tsx
│       └── Button.css
└── design-system/
    └── tokens/
        ├── colors.ts
        ├── typography.ts
        └── spacing.ts
```

### Step 2: Install Required Dependencies
Make sure your project has these dependencies (most are included by default in Lovable):
- `lucide-react` (for icons)
- `clsx` (for className utilities)
- `tailwind-merge` (for merging Tailwind classes)

### Step 3: Add Roboto Font
Add this to your `index.html` in the `<head>` section:
```html
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;600&display=swap" rel="stylesheet">
```

### Step 4: Import and Use Components
```typescript
import { ExpInputField } from '@/components/input/ExpInputField';
import { Button } from '@/components/button/Button';
```

## 6. Usage Examples

### Basic ExpInputField Usage
```typescript
import { ExpInputField } from '@/components/input/ExpInputField';
import { Search } from 'lucide-react';

// Basic usage
<ExpInputField
  label="Email"
  hint="Enter your email"
  height={48}
  isDarkMode={false}
/>

// With validation
<ExpInputField
  label="Email"
  hint="Enter your email"
  hasError={!!error}
  validator={(value) => !value ? "Required" : !/\S+@\S+\.\S+/.test(value) ? "Invalid email" : undefined}
  isDarkMode={false}
/>

// Different sizes
<ExpInputField label="Small" height={32} />
<ExpInputField label="Medium" height={48} />
<ExpInputField label="Large" height={64} />

// With icons
<ExpInputField
  label="Search"
  hint="Search..."
  suffixIcon={<Search className="w-4 h-4 text-gray-400" />}
/>

// Dark mode
<ExpInputField
  label="Dark Input"
  hint="Enter text"
  isDarkMode={true}
/>
```

### Basic Button Usage
```typescript
import { Button } from '@/components/button/Button';

// Basic usage
<Button label="Click Me" variant="primary" styleType="solid" />

// Different variants
<Button label="Primary" variant="primary" styleType="solid" />
<Button label="Secondary" variant="secondary" styleType="outline" />
<Button label="Success" variant="success" styleType="ghost" />
<Button label="Warning" variant="warning" styleType="solid" />

// Different sizes
<Button label="Small" size="small" />
<Button label="Base" size="base" />
<Button label="Large" size="large" />

// With icons
<Button label="Add Item" showLeftIcon={true} />
<Button label="Continue" showRightIcon={true} />
<Button label="Add & Continue" showLeftIcon={true} showRightIcon={true} />

// With click handler
<Button 
  label="Click Me" 
  variant="primary" 
  styleType="solid"
  onClick={() => console.log('Button clicked!')} 
/>
```

## 7. Component Props Reference

### ExpInputField Props
```typescript
interface ExpInputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  hint?: string;                    // Placeholder text (default: "Text here")
  label?: string;                   // Label text (default: "Label")
  labelTextStyle?: string;          // Custom CSS class for label
  isDarkMode?: boolean;             // Enable dark theme (default: false)
  borderRadius?: number;            // Custom border radius (default: 8)
  isDense?: boolean;                // Compact mode (default: false)
  hasError?: boolean;               // Show error state (default: false)
  height?: number;                  // Input height (default: 48)
  suffixIcon?: React.ReactNode;     // Icon on the right
  validator?: (value: string) => string | undefined;  // Validation function
  onSubmittedAction?: (value: string) => void;        // Enter key handler
  ignorePointers?: boolean;         // Disable pointer events (default: false)
  floatingLabelBehavior?: 'auto' | 'always' | 'never';  // Label behavior
  showLabel?: boolean;              // Show/hide label (default: true)
  showPlaceholder?: boolean;        // Show/hide placeholder (default: true)
}
```

### Button Props
```typescript
interface ButtonProps {
  label?: string;                   // Button text (default: "Button")
  variant?: "primary" | "secondary" | "success" | "warning";  // Color variant
  size?: "small" | "base" | "large";                         // Size variant
  styleType?: "solid" | "outline" | "ghost";                 // Style variant
  state?: "default" | "hover" | "disabled";                  // Button state
  showLeftIcon?: boolean;           // Show left icon (default: false)
  showRightIcon?: boolean;          // Show right icon (default: false)
  onClick?: () => void;             // Click handler
}
```

## 8. Troubleshooting

### Common Issues and Solutions

1. **"Cannot find module '@/lib/utils'" Error**
   - Make sure you have created the `src/lib/utils.ts` file
   - Ensure your `tsconfig.json` has the path mapping for `@/*`

2. **"clsx is not defined" Error**
   - Install clsx: The package should already be available in Lovable projects
   - If not available, you can replace `clsx` with a simple function

3. **Font not loading**
   - Make sure you added the Google Fonts link to your `index.html`
   - Check that the font family name matches exactly: 'Roboto'

4. **CSS styles not applying**
   - Ensure you're importing the CSS files in your components
   - Check that the CSS file paths are correct
   - Make sure there are no conflicting styles

5. **Icons not showing**
   - Verify that `lucide-react` is installed
   - Import the specific icons you need: `import { Search, Plus, ArrowRight } from 'lucide-react'`

### Alternative Utils Function (if clsx is not available)
```typescript
// Simple alternative to clsx if not available
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}
```

## 9. Quick Start Template

Here's a complete example component using both Button and ExpInputField:

```typescript
import React, { useState } from 'react';
import { ExpInputField } from '@/components/input/ExpInputField';
import { Button } from '@/components/button/Button';
import { Search } from 'lucide-react';

const ExampleForm = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const validateEmail = (value: string) => {
    if (!value) return "Email is required";
    if (!/\S+@\S+\.\S+/.test(value)) return "Invalid email format";
    return undefined;
  };

  const handleSubmit = () => {
    const validationError = validateEmail(email);
    if (validationError) {
      setError(validationError);
    } else {
      setError('');
      console.log('Form submitted with email:', email);
    }
  };

  return (
    <div className="p-6 space-y-4">
      <h2 className="text-xl font-semibold">Example Form</h2>
      
      <ExpInputField
        label="Email Address"
        hint="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        hasError={!!error}
        validator={validateEmail}
        height={48}
        suffixIcon={<Search className="w-4 h-4 text-gray-400" />}
      />
      
      <Button
        label="Submit"
        variant="primary"
        styleType="solid"
        size="base"
        onClick={handleSubmit}
      />
    </div>
  );
};

export default ExampleForm;
```

This documentation provides everything needed to implement the ExpInputField and Button components in a new Lovable project.
