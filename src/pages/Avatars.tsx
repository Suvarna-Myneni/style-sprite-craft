
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/avatar/Avatar";
import { 
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Copy, User } from "lucide-react";
import { Link } from "react-router-dom";

const Avatars = () => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const codeExamples = {
    basic: `<Avatar size="md">
  <AvatarImage src="/user-photo.jpg" alt="User" />
  <AvatarFallback>JD</AvatarFallback>
</Avatar>`,
    sizes: `<Avatar size="sm">
  <AvatarFallback>SM</AvatarFallback>
</Avatar>
<Avatar size="md">
  <AvatarFallback>MD</AvatarFallback>
</Avatar>
<Avatar size="lg">
  <AvatarFallback>LG</AvatarFallback>
</Avatar>
<Avatar size="xl">
  <AvatarFallback>XL</AvatarFallback>
</Avatar>`,
    withStatus: `<div className="avatar-status avatar-status-online">
  <Avatar size="md">
    <AvatarImage src="/user.jpg" alt="Online user" />
    <AvatarFallback>ON</AvatarFallback>
  </Avatar>
</div>`
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
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
                    <BreadcrumbPage>Avatars</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
              <h1 className="text-4xl font-bold text-gray-900">Avatar Component</h1>
              <p className="text-lg text-gray-600 mt-2">User profile pictures with fallback support</p>
            </div>
            <Badge variant="secondary" className="text-sm px-4 py-2">
              <User className="w-4 h-4 mr-2" />
              v1.0
            </Badge>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 space-y-12">
        {/* Basic Usage */}
        <Card>
          <CardHeader>
            <CardTitle>Basic Usage</CardTitle>
            <CardDescription>Simple avatar with image and fallback</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center gap-4 p-6 bg-gray-50 rounded-lg">
              <Avatar size="md">
                <AvatarImage src="https://github.com/shadcn.png" alt="User avatar" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <Avatar size="md">
                <AvatarFallback>AB</AvatarFallback>
              </Avatar>
            </div>
            <div className="relative">
              <pre className="bg-gray-900 text-gray-100 p-4 rounded text-sm overflow-x-auto">
                <code>{codeExamples.basic}</code>
              </pre>
              <Button
                variant="outline"
                size="sm"
                className="absolute top-2 right-2"
                onClick={() => copyToClipboard(codeExamples.basic)}
              >
                <Copy className="w-4 h-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Size Variants */}
        <Card>
          <CardHeader>
            <CardTitle>Size Variants</CardTitle>
            <CardDescription>Available sizes: sm, md, lg, xl</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center gap-4 p-6 bg-gray-50 rounded-lg">
              <Avatar size="sm">
                <AvatarFallback>SM</AvatarFallback>
              </Avatar>
              <Avatar size="md">
                <AvatarFallback>MD</AvatarFallback>
              </Avatar>
              <Avatar size="lg">
                <AvatarFallback>LG</AvatarFallback>
              </Avatar>
              <Avatar size="xl">
                <AvatarFallback>XL</AvatarFallback>
              </Avatar>
            </div>
            <div className="relative">
              <pre className="bg-gray-900 text-gray-100 p-4 rounded text-sm overflow-x-auto">
                <code>{codeExamples.sizes}</code>
              </pre>
              <Button
                variant="outline"
                size="sm"
                className="absolute top-2 right-2"
                onClick={() => copyToClipboard(codeExamples.sizes)}
              >
                <Copy className="w-4 h-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* With Status Indicators */}
        <Card>
          <CardHeader>
            <CardTitle>Status Indicators</CardTitle>
            <CardDescription>Online, away, and offline status indicators</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center gap-6 p-6 bg-gray-50 rounded-lg">
              <div className="avatar-status avatar-status-online">
                <Avatar size="md">
                  <AvatarFallback>ON</AvatarFallback>
                </Avatar>
              </div>
              <div className="avatar-status avatar-status-away">
                <Avatar size="md">
                  <AvatarFallback>AW</AvatarFallback>
                </Avatar>
              </div>
              <div className="avatar-status avatar-status-offline">
                <Avatar size="md">
                  <AvatarFallback>OF</AvatarFallback>
                </Avatar>
              </div>
            </div>
            <div className="relative">
              <pre className="bg-gray-900 text-gray-100 p-4 rounded text-sm overflow-x-auto">
                <code>{codeExamples.withStatus}</code>
              </pre>
              <Button
                variant="outline"
                size="sm"
                className="absolute top-2 right-2"
                onClick={() => copyToClipboard(codeExamples.withStatus)}
              >
                <Copy className="w-4 h-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Component API */}
        <Card>
          <CardHeader>
            <CardTitle>Component API</CardTitle>
            <CardDescription>Props and customization options</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-2">Prop</th>
                    <th className="text-left p-2">Type</th>
                    <th className="text-left p-2">Default</th>
                    <th className="text-left p-2">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-2"><code>size</code></td>
                    <td className="p-2">"sm" | "md" | "lg" | "xl"</td>
                    <td className="p-2">"md"</td>
                    <td className="p-2">Avatar size variant</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2"><code>className</code></td>
                    <td className="p-2">string</td>
                    <td className="p-2">-</td>
                    <td className="p-2">Additional CSS classes</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Avatars;
