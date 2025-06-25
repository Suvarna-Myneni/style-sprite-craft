
// Design System Main Export File - Transaction Calculator
// Copy this file and the design-system folder to new projects

// Core Design Tokens
export * from './tokens/colors';
export * from './tokens/typography';
export * from './tokens/spacing';

// Component Exports
export { Button } from '../components/button/Button';
export { ExpCheckbox } from '../components/checkbox/ExpCheckbox';
export { ExpRadio } from '../components/checkbox/ExpRadio';
export { CheckboxTile } from '../components/checkbox/CheckboxTile';
export { ExpStepper } from '../components/stepper/ExpStepper';
export { Avatar, AvatarImage, AvatarFallback } from '../components/avatar/Avatar';

// Tag Components
export { TagsComponent, Tag } from '../components/tags/TagsComponent';
export { LovableTag } from '../components/tags/LovableTag';

// Design System Configuration
export { designSystemConfig } from './config/tailwind-preset';
export { colorPalette, colorRoles } from './tokens/colors';

// Type Exports
export type { LovableTagProps } from '../components/tags/LovableTag';

// CSS Imports (to be included in main CSS file)
export const cssImports = [
  '../components/button/Button.css',
  '../components/checkbox/ExpCheckbox.css',
  '../components/checkbox/ExpRadio.css',
  '../components/avatar/Avatar.css',
  '../components/tags/tags-component.css',
];
