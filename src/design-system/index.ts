
// Design System Main Export File
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

// Design System Configuration
export { designSystemConfig } from './config/tailwind-preset';
export { colorPalette } from './tokens/colors';

// CSS Imports (to be included in main CSS file)
export const cssImports = [
  '../components/button/Button.css',
  '../components/checkbox/ExpCheckbox.css',
  '../components/checkbox/ExpRadio.css',
];
