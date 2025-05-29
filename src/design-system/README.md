# Design System Usage Guide

## How to Use This Design System in New Projects

### 1. Copy Files
Copy the entire `design-system` folder to your new Lovable project:
```
src/design-system/
├── index.ts
├── tokens/
│   ├── colors.ts
│   ├── typography.ts
│   └── spacing.ts
├── config/
│   └── tailwind-preset.ts
└── README.md
```

### 2. Copy Components
Copy these component folders:
```
src/components/
├── button/
│   ├── Button.tsx
│   └── Button.css
└── checkbox/
    ├── ExpCheckbox.tsx
    ├── ExpCheckbox.css
    ├── ExpRadio.tsx
    ├── ExpRadio.css
    └── CheckboxTile.tsx
```

### 3. Update Tailwind Config
In your `tailwind.config.ts`, extend with the design system preset:

```typescript
import { designSystemConfig } from './src/design-system/config/tailwind-preset';

export default {
  // ... existing config
  theme: {
    extend: {
      ...designSystemConfig.theme.extend,
      // ... your project-specific overrides
    }
  }
}
```

### 4. Import Components
```typescript
// Import individual components
import { Button, ExpCheckbox, ExpRadio } from '@/design-system';

// Import design tokens
import { colorPalette } from '@/design-system';
```

### 5. Add CSS Variables (Optional)
Add to your main CSS file for theming support:
```css
/* Import the CSS variables */
@import './design-system/tokens/colors.css';
```

## Available Components

- **Button**: Primary button with variants (solid, outline, ghost)
- **ExpCheckbox**: Custom checkbox with multiple states
- **ExpRadio**: Custom radio button with theming support
- **CheckboxTile**: Card-based checkbox component

## Design Tokens

- **Colors**: Primary, secondary, status, and base color palettes
- **Typography**: Font families, sizes, weights, and spacing
- **Spacing**: Consistent spacing scale and border radius values

## Customization

You can override any design tokens by modifying the token files or extending the Tailwind configuration in your specific project.
