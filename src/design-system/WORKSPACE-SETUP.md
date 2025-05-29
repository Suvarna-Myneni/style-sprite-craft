# Design System Workspace Setup Guide

## How to Use This Design System Across Projects

### 1. Copy Required Files
Copy these folders to your new Lovable project:
```
src/design-system/
src/components/button/
src/components/checkbox/
src/components/stepper/
```

### 2. Required Dependencies
Ensure your project has these dependencies (most are included by default in Lovable):
- `lucide-react` (for icons)
- `@radix-ui/react-label` (for form components)
- `class-variance-authority` (for component variants)
- `tailwindcss` (for styling)

### 3. Import Components
```typescript
// Import individual components
import { Button, ExpCheckbox, ExpRadio, ExpStepper } from '@/design-system';

// Import design tokens
import { colorPalette } from '@/design-system';
```

### 4. Usage Examples
```typescript
// Button Component
<Button label="Click me" variant="solid" size="medium" />

// Checkbox Component
<ExpCheckbox label="Accept terms" checked={true} />

// Radio Component
<ExpRadio 
  label="Option 1" 
  value="option1" 
  groupValue={selectedValue}
  onChange={setSelectedValue} 
/>

// Stepper Component
<ExpStepper
  titles={["Step 1", "Step 2", "Step 3"]}
  subtitles={["Description 1", "Description 2", null]}
  completedCount={1}
  isVertical={true}
  isDarkMode={false}
/>
```

### 5. Customization
You can override design tokens by modifying the token files:
- `src/design-system/tokens/colors.ts` - Color palette
- `src/design-system/tokens/typography.ts` - Font settings
- `src/design-system/tokens/spacing.ts` - Spacing and border radius

### 6. Tailwind Integration
Add to your `tailwind.config.ts`:
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

## Available Components

### Button
- Variants: solid, outline, ghost
- Sizes: small, medium, large
- States: normal, disabled, loading

### ExpCheckbox
- States: unchecked, checked, intermediate
- Themes: light, dark
- Disabled state support

### ExpRadio
- Group-based selection
- Themes: light, dark
- Error state support

### ExpStepper
- Vertical and horizontal layouts
- Progress tracking
- Dark mode support
- Customizable step titles and subtitles

### CheckboxTile
- Card-based checkbox component
- Icon support
- Description text

## Design Tokens

### Colors
- Primary color palette
- Secondary color variants
- Status colors (success, warning, error)
- Base colors (grays, black, white)

### Typography
- Font families (Roboto)
- Font sizes (10px to 48px)
- Font weights (400, 600)
- Line heights and letter spacing

### Spacing
- Consistent spacing scale
- Border radius values

## Best Practices

1. **Consistency**: Always use design system components instead of custom implementations
2. **Theming**: Use the provided color tokens instead of hardcoded colors
3. **Accessibility**: Components include ARIA labels and keyboard navigation
4. **Responsive**: All components are designed to work across device sizes
5. **Documentation**: Keep component usage examples updated

## Maintenance

When updating the design system:
1. Make changes in the main project
2. Test thoroughly
3. Copy updated files to other projects
4. Document breaking changes
5. Update version in component comments
