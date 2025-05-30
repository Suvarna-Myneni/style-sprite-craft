
# Design System - GitHub Export Structure

Copy this entire structure to your GitHub repository for reusability across workspaces.

## Folder Structure
```
design-system/
├── README.md
├── package.json
├── src/
│   ├── index.ts
│   ├── components/
│   │   ├── button/
│   │   │   ├── Button.tsx
│   │   │   └── Button.css
│   │   ├── checkbox/
│   │   │   ├── ExpCheckbox.tsx
│   │   │   ├── ExpCheckbox.css
│   │   │   ├── ExpRadio.tsx
│   │   │   ├── ExpRadio.css
│   │   │   └── CheckboxTile.tsx
│   │   ├── input/
│   │   │   ├── ExpInputField.tsx
│   │   │   └── ExpInputField.css
│   │   ├── navigation/
│   │   │   ├── PageHeader.tsx
│   │   │   ├── ResponsiveHeader.tsx
│   │   │   ├── DesktopLeftNav.tsx
│   │   │   ├── DesktopLeftNav.css
│   │   │   └── MobileNav.tsx
│   │   ├── banner/
│   │   │   ├── BannersWebFrame.tsx
│   │   │   ├── BannersWebFrame.css
│   │   │   ├── BannersWebGraph.tsx
│   │   │   ├── BannersWebGraph.css
│   │   │   ├── BannersWebNeed.tsx
│   │   │   ├── BannersWebNeed.css
│   │   │   ├── MobileDISCBanner.tsx
│   │   │   ├── MobileDISCBanner.css
│   │   │   ├── MobileHealthcareBanner.tsx
│   │   │   ├── MobileHealthcareBanner.css
│   │   │   ├── MobileMentoringBanner.tsx
│   │   │   ├── MobileMentoringBanner.css
│   │   │   └── MobileWelcomeBanner.css
│   │   └── stepper/
│   │       └── ExpStepper.tsx
│   ├── tokens/
│   │   ├── colors.ts
│   │   ├── typography.ts
│   │   └── spacing.ts
│   ├── config/
│   │   └── tailwind-preset.ts
│   └── utils/
│       └── cn.ts
└── docs/
    ├── installation.md
    ├── components.md
    └── examples.md
```

## Installation Instructions

1. Clone or download this repository
2. Copy the `src/` folder to your project
3. Install required dependencies:
```bash
npm install @radix-ui/react-label class-variance-authority lucide-react tailwindcss clsx tailwind-merge
```
4. Import components:
```typescript
import { Button, ExpCheckbox, ExpInputField } from './design-system';
```

## Usage Example
```typescript
import { Button, ExpCheckbox, ExpInputField } from './design-system';

function MyApp() {
  return (
    <div>
      <ExpInputField label="Name" hint="Enter your name" />
      <ExpCheckbox label="Agree to terms" />
      <Button label="Submit" variant="primary" />
    </div>
  );
}
```
