import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Palette, Type, Grid3X3, Image as ImageIcon, Layout, Layers, FileText, Brush, Target, Users, Zap, Tag, Layers as TabsIcon, Navigation as NavigationIcon, Edit, CheckSquare, Flag } from "lucide-react";
const Index = () => {
  const sections = [{
    title: "Colors",
    description: "Primary, secondary, status, and base colors with accessibility guidelines",
    icon: Palette,
    path: "/colors",
    color: "bg-[#1B489B]"
  }, {
    title: "Typography",
    description: "Font families, sizes, weights, and hierarchy for web and mobile",
    icon: Type,
    path: "/typography",
    color: "bg-[#1E774A]"
  }, {
    title: "Icons",
    description: "Consistent iconography with sizing and usage guidelines",
    icon: Layers,
    path: "/icons",
    color: "bg-[#895D0B]"
  }, {
    title: "Buttons",
    description: "Interactive elements with various styles, sizes, and states",
    icon: Target,
    path: "/buttons",
    color: "bg-[#1B489B]"
  }, {
    title: "Input Fields",
    description: "Advanced input field components with theme support and validation",
    icon: Edit,
    path: "/input-field",
    color: "bg-[#DC2626]"
  }, {
    title: "Checkbox",
    description: "Checkbox components with various states and styling options",
    icon: CheckSquare,
    path: "/checkboxes",
    color: "bg-[#7C3AED]"
  }, {
    title: "Banner",
    description: "Banner components for highlighting important content and promotions",
    icon: Flag,
    path: "/banners",
    color: "bg-[#DC2626]"
  }, {
    title: "Progress Bar",
    description: "Step-by-step progress indicators and stepper components",
    icon: Users,
    path: "/progress-bar",
    color: "bg-[#1E774A]"
  }, {
    title: "Tags",
    description: "Categorization labels and contextual information components",
    icon: Tag,
    path: "/tags",
    color: "bg-[#7C3AED]"
  }, {
    title: "Tabs",
    description: "Navigation components for switching between content views",
    icon: TabsIcon,
    path: "/tabs",
    color: "bg-[#DC2626]"
  }, {
    title: "Navigation",
    description: "Navigation patterns and components for application structure",
    icon: NavigationIcon,
    path: "/navigation",
    color: "bg-[#0c0f24]"
  }, {
    title: "Grids",
    description: "Responsive grid systems and layout foundations",
    icon: Grid3X3,
    path: "/grids",
    color: "bg-[#496DAF]"
  }, {
    title: "Illustrations",
    description: "Custom illustrations and visual storytelling elements",
    icon: ImageIcon,
    path: "/illustrations",
    color: "bg-[#93A3CB]"
  }, {
    title: "Background",
    description: "Patterns, textures, and background elements",
    icon: Brush,
    path: "/background",
    color: "bg-[#3D3F50]"
  }, {
    title: "Layouts",
    description: "Page templates and component arrangements",
    icon: Layout,
    path: "/layouts",
    color: "bg-[#858791]"
  }, {
    title: "Documentation",
    description: "Usage guidelines and best practices",
    icon: FileText,
    path: "/docs",
    color: "bg-[#0C0F24]"
  }];
  const goals = [{
    icon: Target,
    title: "Consistency Across Platforms",
    description: "Unified visual language across web, mobile, and desktop platforms"
  }, {
    icon: Zap,
    title: "Efficiency in Development",
    description: "Reusable components and patterns to streamline workflows"
  }, {
    icon: Layout,
    title: "Scalability and Flexibility",
    description: "Adaptable system that grows with new products and features"
  }, {
    icon: Users,
    title: "Accessibility and Inclusivity",
    description: "Products usable by everyone, following WCAG standards"
  }];
  const principles = [{
    title: "User-Centric Design",
    description: "Always design with the end-user in mind, ensuring intuitive and efficient interactions."
  }, {
    title: "Clarity and Simplicity",
    description: "Clean, uncluttered visual elements that improve usability and reduce friction."
  }, {
    title: "Consistency",
    description: "Harmonious components with unified typography, color, and spacing guidelines."
  }, {
    title: "Accessibility",
    description: "Embracing accessibility standards for users of all abilities."
  }, {
    title: "Modularity and Flexibility",
    description: "Reusable components designed to adapt to various contexts and future needs."
  }, {
    title: "Collaboration and Transparency",
    description: "Clear documentation fostering cross-functional collaboration and transparency."
  }];
  return <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-gray-900">Design System</h1>
              <p className="text-lg text-gray-600 mt-2">Foundation for Unified User Experience</p>
            </div>
            <Badge variant="secondary" className="text-sm px-4 py-2 rounded-sm">
              Version 2.1
            </Badge>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Comprehensive Design Foundation
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            The Design System is a comprehensive guide that ensures consistency, scalability, and efficiency across all digital products. 
            It serves as the single source of truth for design decisions, combining components, patterns, and principles that form the 
            foundation of a unified user experience across platforms.
          </p>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed mt-4">
            At its core, the system provides a shared language for designers, developers, and stakeholders to collaborate seamlessly, 
            defining clear guidelines for typography, color palettes, iconography, layout, and interaction patterns.
          </p>
        </div>

        {/* Goals */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Goals</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {goals.map(goal => {
            const IconComponent = goal.icon;
            return <Card key={goal.title} className="text-center">
                  <CardHeader className="pb-4">
                    <div className="w-12 h-12 rounded-lg bg-[#1B489B] flex items-center justify-center mb-4 mx-auto">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-lg">{goal.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm leading-relaxed">
                      {goal.description}
                    </CardDescription>
                  </CardContent>
                </Card>;
          })}
          </div>
        </div>

        {/* Guiding Principles */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Guiding Principles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {principles.map(principle => <Card key={principle.title}>
                <CardHeader>
                  <CardTitle className="text-lg text-[#1B489B]">{principle.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">
                    {principle.description}
                  </CardDescription>
                </CardContent>
              </Card>)}
          </div>
        </div>

        {/* Foundation Components */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Foundation Components</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sections.map(section => {
            const IconComponent = section.icon;
            return <Link key={section.title} to={section.path}>
                  <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
                    <CardHeader className="pb-4">
                      <div className={`w-12 h-12 rounded-lg ${section.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="text-xl">{section.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-sm leading-relaxed">
                        {section.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </Link>;
          })}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-[#1B489B]">15</div>
            <div className="text-sm text-gray-600">Color Variants</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#1E774A]">8</div>
            <div className="text-sm text-gray-600">Typography Scales</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#895D0B]">200+</div>
            <div className="text-sm text-gray-600">Icons Available</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#7C3AED]">100%</div>
            <div className="text-sm text-gray-600">Accessibility</div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-[#0C0F24] text-white mt-20">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-[#1B489B] rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">DS</span>
              </div>
              <span className="text-sm">Design System Foundation</span>
            </div>
            <div className="text-sm text-gray-400">
              Built for consistency, scalability, and accessibility
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default Index;