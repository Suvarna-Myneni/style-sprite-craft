
// Design System Color Tokens
// Copy this to new projects and import from your design system

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

// CSS Custom Properties for easy theming
export const cssVariables = `
:root {
  --primary-500: #1B489B;
  --primary-400: #496DAF;
  --primary-300: #93A3CB;
  --primary-200: #D4DAEA;
  --primary-100: #E9ECF4;
  
  --secondary-500: #0C0F24;
  --secondary-400: #3D3F50;
  --secondary-300: #858791;
  --secondary-200: #CECFD3;
  --secondary-100: #E7E7E9;
  
  --success: #1E774A;
  --success-light: #CCF2DB;
  --warning: #895D0B;
  --warning-light: #FFE1A4;
  
  --base-white: #FFFFFF;
  --base-black: #303030;
  --disabled: #858791;
  --hover: #496DAF;
}
`;
