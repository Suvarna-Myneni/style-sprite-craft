
# Design System Components

A comprehensive React component library built with TypeScript, Tailwind CSS, and modern best practices.

## 🚀 Quick Start

```bash
# Install the package
npm install @your-org/design-system

# Install peer dependencies
npm install react react-dom @radix-ui/react-label class-variance-authority lucide-react tailwindcss clsx tailwind-merge
```

## 📦 Components Included

### Input Components
- **ExpInputField** - Customizable input field with labels, hints, and validation
- **ExpCheckbox** - Checkbox component with dark mode support
- **ExpRadio** - Radio button component
- **CheckboxTile** - Card-style checkbox for better UX

### Button Components
- **Button** - Versatile button with multiple variants (primary, secondary, success, warning)
- Support for solid, outline, and ghost styles
- Multiple sizes (small, base, large)
- Icon support (left/right icons)

### Navigation Components
- **PageHeader** - Consistent page headers with breadcrumbs
- **ResponsiveHeader** - Mobile-responsive header
- **DesktopLeftNav** - Desktop sidebar navigation
- **MobileNav** - Mobile navigation drawer

### Banner Components
- **BannersWebFrame** - Web banner frames
- **BannersWebGraph** - Graph-style banners
- **Mobile Banners** - Various mobile-optimized banner components

### Other Components
- **ExpStepper** - Step indicator component

## 🎨 Design Tokens

The system includes comprehensive design tokens for:
- **Colors** - Primary, secondary, status, and base color palettes
- **Typography** - Font families, sizes, weights, and spacing
- **Spacing** - Consistent spacing scale and border radius

## 📖 Usage Examples

### Basic Form
```typescript
import { ExpInputField, ExpCheckbox, Button } from '@your-org/design-system';

function ContactForm() {
  return (
    <form className="space-y-4">
      <ExpInputField 
        label="Full Name" 
        hint="Enter your full name"
      />
      <ExpInputField 
        label="Email" 
        hint="Enter your email address"
        type="email"
      />
      <ExpCheckbox label="Subscribe to newsletter" />
      <Button 
        label="Submit" 
        variant="primary" 
        styleType="solid"
      />
    </form>
  );
}
```

### Button Variations
```typescript
import { Button } from '@your-org/design-system';

function ButtonExamples() {
  return (
    <div className="space-x-4">
      <Button label="Primary" variant="primary" />
      <Button label="Secondary" variant="secondary" styleType="outline" />
      <Button label="Success" variant="success" size="large" />
      <Button label="With Icon" showLeftIcon={true} />
    </div>
  );
}
```

## 🛠 Development

1. Clone the repository
2. Install dependencies: `npm install`
3. Start development: `npm run dev`
4. Build: `npm run build`

## 📄 License

MIT License - see LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📞 Support

For questions or issues, please open a GitHub issue or contact the maintainers.
