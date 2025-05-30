
# Design System Installation Guide

## Method 1: Copy Files Directly

### Step 1: Copy Component Files
Copy these files from the current project to your new project:

```
src/components/
├── button/
│   ├── Button.tsx
│   └── Button.css
├── checkbox/
│   ├── ExpCheckbox.tsx
│   ├── ExpCheckbox.css
│   ├── ExpRadio.tsx
│   ├── ExpRadio.css
│   └── CheckboxTile.tsx
├── input/
│   ├── ExpInputField.tsx
│   └── ExpInputField.css
├── navigation/
│   ├── PageHeader.tsx
│   ├── ResponsiveHeader.tsx
│   ├── DesktopLeftNav.tsx
│   ├── DesktopLeftNav.css
│   └── MobileNav.tsx
└── banner/
    ├── BannersWebFrame.tsx
    ├── BannersWebFrame.css
    ├── BannersWebGraph.tsx
    ├── BannersWebGraph.css
    ├── BannersWebNeed.tsx
    ├── BannersWebNeed.css
    ├── MobileDISCBanner.tsx
    ├── MobileDISCBanner.css
    ├── MobileHealthcareBanner.tsx
    ├── MobileHealthcareBanner.css
    ├── MobileMentoringBanner.tsx
    └── MobileMentoringBanner.css
```

### Step 2: Copy Design Tokens
```
src/design-system/
├── tokens/
│   ├── colors.ts
│   ├── typography.ts
│   └── spacing.ts
└── config/
    └── tailwind-preset.ts
```

### Step 3: Copy Utilities
```
src/lib/
└── utils.ts
```

### Step 4: Install Dependencies
```bash
npm install @radix-ui/react-label class-variance-authority lucide-react clsx tailwind-merge
```

### Step 5: Create Index File
Create `src/design-system/index.ts` with the export structure provided in COMPONENT_EXPORTS.ts

## Method 2: GitHub Repository (Recommended)

### Step 1: Create GitHub Repository
1. Create a new repository on GitHub
2. Copy all files using the structure in GITHUB_EXPORT_STRUCTURE.md
3. Use the package.json template provided

### Step 2: Install as NPM Package
```bash
# If published to NPM
npm install @your-org/design-system

# If using GitHub directly
npm install git+https://github.com/your-username/design-system.git
```

### Step 3: Import Components
```typescript
import { Button, ExpCheckbox, ExpInputField } from '@your-org/design-system';
```

## Method 3: Git Submodule

### Step 1: Add as Submodule
```bash
git submodule add https://github.com/your-username/design-system.git src/design-system
```

### Step 2: Initialize and Update
```bash
git submodule init
git submodule update
```

### Step 3: Import Components
```typescript
import { Button } from './design-system/src/components/button/Button';
```

## Troubleshooting

### Missing Dependencies
If you get import errors, ensure these packages are installed:
```bash
npm install @radix-ui/react-label class-variance-authority lucide-react clsx tailwind-merge tailwindcss
```

### CSS Not Loading
Make sure to import CSS files in your main CSS file:
```css
@import './design-system/src/components/button/Button.css';
@import './design-system/src/components/checkbox/ExpCheckbox.css';
@import './design-system/src/components/input/ExpInputField.css';
```

### TypeScript Errors
Ensure your tsconfig.json includes the design system path:
```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/design-system/*": ["src/design-system/*"]
    }
  }
}
```
