
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ResponsiveHeader } from "@/components/navigation/ResponsiveHeader";
import { TrainingBanner } from "@/components/banner/TrainingBanner";
import { BannersWebGraph } from "@/components/banner/BannersWebGraph";
import { BannersWebFrame } from "@/components/banner/BannersWebFrame";
import { BannersWebNeed } from "@/components/banner/BannersWebNeed";
import { MobileDISCBanner } from "@/components/banner/MobileDISCBanner";
import { MobileMentoringBanner } from "@/components/banner/MobileMentoringBanner";
import { MobileWelcomeBanner } from "@/components/banner/MobileWelcomeBanner";
import { MobileHealthcareBanner } from "@/components/banner/MobileHealthcareBanner";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Palette } from "lucide-react";
import { 
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const Banners = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Mobile Header */}
      <ResponsiveHeader />

      {/* Desktop Header */}
      <div className="bg-white shadow-sm border-b hidden lg:block">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <div>
              <Breadcrumb className="mb-4">
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <Link to="/">Design System</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Banners</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-lg bg-[#0c0f24] flex items-center justify-center">
                  <Palette className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-4xl font-bold text-gray-900">Banners</h1>
                  <p className="text-lg text-gray-600 mt-2">Banner components for highlighting important content</p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Badge variant="secondary" className="text-sm px-4 py-2">
                Components
              </Badge>
              <div className="flex items-center space-x-2 ml-4">
                <Link to="/navigation">
                  <Button variant="outline" size="sm">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Navigation
                  </Button>
                </Link>
                <Link to="/buttons">
                  <Button variant="outline" size="sm">
                    Buttons
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Web Banners */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Web Banners</h3>
          <div className="space-y-6 mb-8">
            {/* Training Banner */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Training Banner</h4>
              <TrainingBanner />
            </div>
            
            {/* Information Banner */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Information Banner</h4>
              <BannersWebGraph />
            </div>

            {/* DISC Assessment Banner */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">DISC Assessment Banner</h4>
              <BannersWebFrame />
            </div>

            {/* Need Mentoring Banner */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Need Mentoring Banner</h4>
              <BannersWebNeed />
            </div>
          </div>
        </div>

        {/* Mobile Banners */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Mobile Banners</h3>
          <div className="space-y-6 mb-8">
            {/* Mobile DISC Assessment Banner */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Mobile DISC Assessment Banner</h4>
              <MobileDISCBanner />
            </div>

            {/* Mobile Mentoring Banner */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Mobile Mentoring Banner</h4>
              <MobileMentoringBanner />
            </div>

            {/* Mobile Welcome Banner */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Mobile Welcome Banner</h4>
              <MobileWelcomeBanner />
            </div>

            {/* Mobile Healthcare Banner */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Mobile Healthcare Banner</h4>
              <MobileHealthcareBanner />
            </div>
          </div>
        </div>

        {/* Banner Tiles Section */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Banner Types</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Training Banner</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  A banner component with background image for training content with a call-to-action button.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Information Banner</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  A dark-themed banner for highlighting important information with navigation elements.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Assessment Banner</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  An interactive banner with background image promoting DISC assessment with visual elements.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Mentoring Banner</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  A compact banner promoting mentoring services with contact information and background image.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Features */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Banner Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Background Images</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Support for background images with proper text overlay and call-to-action buttons.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Dark Theme</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Professional dark color scheme with high contrast text for better readability.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Interactive Elements</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Navigation arrows and buttons to provide clear calls-to-action for users.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banners;
