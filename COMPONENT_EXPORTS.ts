
// Main export file for the design system
// Copy this as src/index.ts in your GitHub repository

// Core Design Tokens
export * from './tokens/colors';
export * from './tokens/typography';
export * from './tokens/spacing';

// Utility functions
export { cn } from './utils/cn';

// Component Exports
export { Button } from './components/button/Button';
export { ExpCheckbox } from './components/checkbox/ExpCheckbox';
export { ExpRadio } from './components/checkbox/ExpRadio';
export { CheckboxTile } from './components/checkbox/CheckboxTile';
export { ExpInputField } from './components/input/ExpInputField';
export { ExpStepper } from './components/stepper/ExpStepper';
export { Avatar, AvatarImage, AvatarFallback } from './components/avatar/Avatar';

// Navigation Components
export { PageHeader } from './components/navigation/PageHeader';
export { ResponsiveHeader } from './components/navigation/ResponsiveHeader';
export { DesktopLeftNav } from './components/navigation/DesktopLeftNav';
export { MobileNav } from './components/navigation/MobileNav';

// Banner Components
export { BannersWebFrame } from './components/banner/BannersWebFrame';
export { BannersWebGraph } from './components/banner/BannersWebGraph';
export { BannersWebNeed } from './components/banner/BannersWebNeed';
export { MobileDISCBanner } from './components/banner/MobileDISCBanner';
export { MobileHealthcareBanner } from './components/banner/MobileHealthcareBanner';
export { MobileMentoringBanner } from './components/banner/MobileMentoringBanner';

// Design System Configuration
export { designSystemConfig } from './config/tailwind-preset';
export { colorPalette } from './tokens/colors';

// Type exports
export type { ButtonProps } from './components/button/Button';
export type { ExpCheckboxProps } from './components/checkbox/ExpCheckbox';
export type { ExpInputFieldProps } from './components/input/ExpInputField';
export type { AvatarProps } from './components/avatar/Avatar';
