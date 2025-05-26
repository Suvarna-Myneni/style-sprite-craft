
import { DesktopLeftNav } from "@/components/navigation/DesktopLeftNav";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navigation as NavigationIcon } from "lucide-react";

const Navigation = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-lg bg-[#0c0f24] flex items-center justify-center">
                <NavigationIcon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-4xl font-bold text-gray-900">Navigation</h1>
                <p className="text-lg text-gray-600 mt-2">Navigation components and patterns</p>
              </div>
            </div>
            <Badge variant="secondary" className="text-sm px-4 py-2">
              Components
            </Badge>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Desktop Left Navigation */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Desktop Left Navigation</CardTitle>
              <CardDescription>
                A vertical navigation component designed for desktop applications with a dark theme and hover states.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="border rounded-lg overflow-hidden">
                <DesktopLeftNav />
              </div>
            </CardContent>
          </Card>

          {/* Navigation Guidelines */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Navigation Guidelines</CardTitle>
              <CardDescription>
                Best practices for implementing navigation components in your application.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Visual Hierarchy</h4>
                <p className="text-sm text-gray-600">
                  Use clear visual hierarchy with active states, hover effects, and consistent spacing to guide users through the navigation.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Responsive Design</h4>
                <p className="text-sm text-gray-600">
                  Adapt navigation patterns for different screen sizes, from desktop sidebars to mobile hamburger menus.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Accessibility</h4>
                <p className="text-sm text-gray-600">
                  Ensure keyboard navigation, proper ARIA labels, and sufficient color contrast for all navigation elements.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Features */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Dark Theme</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Professional dark color scheme with the primary background color #0c0f24 and hover states.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Interactive States</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Clear active and hover states to provide visual feedback for user interactions.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Typography</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Consistent typography using Roboto font family with appropriate sizing and spacing.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
