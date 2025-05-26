import { Link } from "react-router-dom";
import { ArrowLeft, Monitor, Smartphone, Grid3X3, Layout } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Grids = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center space-x-4">
            <Link to="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Design System
              </Button>
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Grids</h1>
              <p className="text-gray-600">Foundational layout framework for consistent content organization</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Introduction */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Grid System Overview</CardTitle>
            <CardDescription>
              The grid system is a foundational layout framework used to structure and organize content in a clear and consistent manner across all screen sizes. Grids create visual harmony and guide users through the content with ease, ensuring that elements are aligned and spaced uniformly.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Platforms Supported</h4>
                <p className="text-sm text-gray-600">Web, Mobile, Tablet</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Components Covered</h4>
                <p className="text-sm text-gray-600">12-Column Grid, Responsive Breakpoints, Gutter Systems</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Desktop Grid System with Image */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Monitor className="w-5 h-5 mr-2" />
              Desktop Grid System
            </CardTitle>
            <CardDescription>
              12-column grid system optimized for desktop layouts with a maximum container width of 1192px
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {/* Desktop Grid Image */}
              <div className="bg-gray-50 p-6 rounded-lg border-2 border-dashed border-gray-200">
                <img 
                  src="/lovable-uploads/3b22ef37-2b43-4865-8047-79684460485d.png" 
                  alt="Desktop Grid System - 12 Column Layout with container width 1192px, 72px columns, 24px gutters, and 32px margins"
                  className="w-full h-auto object-contain bg-white rounded shadow-sm"
                />
                <p className="text-center text-sm text-gray-500 mt-2">Desktop Grid Structure - 12 Columns with 24px Gutters, 1192px Container</p>
              </div>

              {/* Desktop Specifications */}
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-blue-900 mb-2">Container</h5>
                  <p className="text-sm text-blue-700">Max width: 1192px</p>
                  <p className="text-sm text-blue-700">Margin: Auto center</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-green-900 mb-2">Columns</h5>
                  <p className="text-sm text-green-700">Count: 12 columns</p>
                  <p className="text-sm text-green-700">Width: 72px each</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-purple-900 mb-2">Gutters</h5>
                  <p className="text-sm text-purple-700">Size: 24px between columns</p>
                  <p className="text-sm text-purple-700">Outer margins: 32px</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Mobile Grid System with Image */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Smartphone className="w-5 h-5 mr-2" />
              Mobile Grid System
            </CardTitle>
            <CardDescription>
              Responsive 4-column grid system optimized for mobile devices with adaptive spacing
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {/* Mobile Grid Image */}
              <div className="bg-gray-50 p-6 rounded-lg border-2 border-dashed border-gray-200 flex justify-center">
                <div className="max-w-sm">
                  <img 
                    src="/lovable-uploads/9a0e531d-c9a5-4591-a3a4-d6e1bf00a3f2.png" 
                    alt="Mobile Grid System - 4 Column Layout with 88px header, 16px margins, and responsive design"
                    className="w-full h-auto object-contain bg-white rounded shadow-sm"
                  />
                  <p className="text-center text-sm text-gray-500 mt-2">Mobile Grid Structure - 4 Columns with 16px Margins</p>
                </div>
              </div>

              {/* Mobile Specifications */}
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-blue-900 mb-2">Container</h5>
                  <p className="text-sm text-blue-700">Full width with margins</p>
                  <p className="text-sm text-blue-700">Responsive padding</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-green-900 mb-2">Columns</h5>
                  <p className="text-sm text-green-700">Count: 4 columns</p>
                  <p className="text-sm text-green-700">Fluid width</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-purple-900 mb-2">Gutters</h5>
                  <p className="text-sm text-purple-700">Size: 16px between columns</p>
                  <p className="text-sm text-purple-700">Outer margins: 16px</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Principles */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Grid Principles</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Consistency</h4>
                <p className="text-sm text-gray-600">Ensures uniform spacing, alignment, and proportion throughout the interface, creating a cohesive look across different screens and devices.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Flexibility</h4>
                <p className="text-sm text-gray-600">Adaptable enough to handle different types of content while maintaining order, crucial for responsive design across various screen sizes.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Clarity</h4>
                <p className="text-sm text-gray-600">Provides visual anchors and guides that help users navigate content efficiently while establishing clear information hierarchy.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Balance</h4>
                <p className="text-sm text-gray-600">Distributes space evenly to ensure no section feels overcrowded or imbalanced, creating harmonious layouts.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Responsiveness</h4>
                <p className="text-sm text-gray-600">Adapts to different device sizes, ensuring layouts scale and reflow properly across mobile, tablet, and desktop devices.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Responsive Breakpoints */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Responsive Breakpoints</CardTitle>
            <CardDescription>
              Grid system adapts across different screen sizes with optimized column counts and spacing
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4">Device</th>
                    <th className="text-left py-3 px-4">Breakpoint</th>
                    <th className="text-left py-3 px-4">Columns</th>
                    <th className="text-left py-3 px-4">Gutter</th>
                    <th className="text-left py-3 px-4">Margins</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-3 px-4 font-medium">Mobile</td>
                    <td className="py-3 px-4">320px - 768px</td>
                    <td className="py-3 px-4">4 columns</td>
                    <td className="py-3 px-4">16px</td>
                    <td className="py-3 px-4">16px</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4 font-medium">Tablet</td>
                    <td className="py-3 px-4">768px - 1024px</td>
                    <td className="py-3 px-4">8 columns</td>
                    <td className="py-3 px-4">20px</td>
                    <td className="py-3 px-4">24px</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">Desktop</td>
                    <td className="py-3 px-4">1024px+</td>
                    <td className="py-3 px-4">12 columns</td>
                    <td className="py-3 px-4">24px</td>
                    <td className="py-3 px-4">32px</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Usage Guidelines */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Usage Guidelines</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Columns and Flexibility</h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Use 12-column grid for desktop layouts</li>
                  <li>• Columns stack on mobile for optimal readability</li>
                  <li>• Allow for 3, 4, 6, or 12 column variations</li>
                  <li>• Maintain proportional relationships across breakpoints</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Content Alignment</h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Align text, images, and UI components to grid</li>
                  <li>• Ensure consistent alignment across sections</li>
                  <li>• Use columns to create visual hierarchy</li>
                  <li>• Maintain organized, easy-to-navigate interfaces</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Vertical Rhythm</h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Maintain consistent vertical spacing between sections</li>
                  <li>• Use baseline grid for text alignment</li>
                  <li>• Define padding between headers and content</li>
                  <li>• Create natural content flow with proper spacing</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Whitespace Management</h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Leave appropriate margins at layout edges</li>
                  <li>• Provide breathing room around content</li>
                  <li>• Focus user attention on core content</li>
                  <li>• Balance content density with readability</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Grid Examples */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Common Grid Layouts</CardTitle>
            <CardDescription>
              Examples of how to use the grid system for different content types
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {/* Two Column Layout */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Two Column Layout (6-6)</h4>
                <div className="grid grid-cols-2 gap-6 bg-gray-50 p-4 rounded-lg">
                  <div className="bg-white p-4 rounded border-2 border-dashed border-gray-300">
                    <p className="text-sm text-gray-600">Content Block 1</p>
                  </div>
                  <div className="bg-white p-4 rounded border-2 border-dashed border-gray-300">
                    <p className="text-sm text-gray-600">Content Block 2</p>
                  </div>
                </div>
              </div>

              {/* Three Column Layout */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Three Column Layout (4-4-4)</h4>
                <div className="grid grid-cols-3 gap-6 bg-gray-50 p-4 rounded-lg">
                  <div className="bg-white p-4 rounded border-2 border-dashed border-gray-300">
                    <p className="text-sm text-gray-600">Content Block 1</p>
                  </div>
                  <div className="bg-white p-4 rounded border-2 border-dashed border-gray-300">
                    <p className="text-sm text-gray-600">Content Block 2</p>
                  </div>
                  <div className="bg-white p-4 rounded border-2 border-dashed border-gray-300">
                    <p className="text-sm text-gray-600">Content Block 3</p>
                  </div>
                </div>
              </div>

              {/* Sidebar Layout */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Sidebar Layout (3-9)</h4>
                <div className="grid grid-cols-12 gap-6 bg-gray-50 p-4 rounded-lg">
                  <div className="col-span-3 bg-white p-4 rounded border-2 border-dashed border-gray-300">
                    <p className="text-sm text-gray-600">Sidebar</p>
                  </div>
                  <div className="col-span-9 bg-white p-4 rounded border-2 border-dashed border-gray-300">
                    <p className="text-sm text-gray-600">Main Content Area</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Best Practices */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-green-700">Do's</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-sm text-gray-600">
                <li>• Use consistent column and gutter sizes</li>
                <li>• Align content to the grid structure</li>
                <li>• Test layouts across all breakpoints</li>
                <li>• Maintain visual hierarchy with grid positioning</li>
                <li>• Use appropriate margins for breathing room</li>
                <li>• Plan for content that spans multiple columns</li>
                <li>• Consider accessibility in grid layouts</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-red-700">Don'ts</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-sm text-gray-600">
                <li>• Don't ignore grid alignment for arbitrary placement</li>
                <li>• Avoid inconsistent gutter sizes within layouts</li>
                <li>• Don't overcrowd content without proper spacing</li>
                <li>• Avoid breaking grid structure for minor adjustments</li>
                <li>• Don't forget to test mobile responsiveness</li>
                <li>• Avoid using too many columns on small screens</li>
                <li>• Don't neglect vertical rhythm and spacing</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Grids;
