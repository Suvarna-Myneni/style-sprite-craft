
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Search, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { ExpInputField } from "@/components/input/ExpInputField";
import { 
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Type } from "lucide-react";

const InputFields = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    search: '',
    description: ''
  });

  const emailValidator = (value: string) => {
    if (!value) return 'Email is required';
    if (!/\S+@\S+\.\S+/.test(value)) return 'Please enter a valid email';
    return undefined;
  };

  const passwordValidator = (value: string) => {
    if (!value) return 'Password is required';
    if (value.length < 6) return 'Password must be at least 6 characters';
    return undefined;
  };

  return (
    <div className={`min-h-screen transition-colors ${
      isDarkMode 
        ? 'bg-gradient-to-br from-gray-900 to-gray-800 text-white' 
        : 'bg-gradient-to-br from-slate-50 to-slate-100'
    }`}>
      {/* Header */}
      <div className={`shadow-sm border-b transition-colors ${
        isDarkMode ? 'bg-gray-900 border-gray-700' : 'bg-white'
      }`}>
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
                    <BreadcrumbPage>Input Fields</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-lg bg-[#0c0f24] flex items-center justify-center">
                  <Type className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className={`text-4xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Input Fields
                  </h1>
                  <p className={`text-lg mt-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    Text input components with validation and theming
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Label htmlFor="dark-mode">Dark Mode</Label>
                <Switch
                  id="dark-mode"
                  checked={isDarkMode}
                  onCheckedChange={setIsDarkMode}
                />
              </div>
              <Badge variant="secondary" className="text-sm px-4 py-2">
                Components
              </Badge>
              <div className="flex items-center space-x-2">
                <Link to="/navigation">
                  <Button variant="outline" size="sm">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Navigation
                  </Button>
                </Link>
                <Link to="/colors">
                  <Button variant="outline" size="sm">
                    Colors
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
        {/* Basic Input Examples */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className={isDarkMode ? 'bg-gray-800 border-gray-700' : ''}>
            <CardHeader>
              <CardTitle className={isDarkMode ? 'text-white' : 'text-gray-900'}>
                Basic Input Fields
              </CardTitle>
              <CardDescription className={isDarkMode ? 'text-gray-300' : ''}>
                Standard text input with label and placeholder
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <ExpInputField
                label="Email Address"
                hint="Enter your email"
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                isDarkMode={isDarkMode}
                validator={emailValidator}
                hasError={!!formData.email && !!emailValidator(formData.email)}
              />
              
              <ExpInputField
                label="Search"
                hint="Search for anything..."
                value={formData.search}
                onChange={(e) => setFormData(prev => ({ ...prev, search: e.target.value }))}
                isDarkMode={isDarkMode}
                suffixIcon={<Search className="w-4 h-4" />}
              />
            </CardContent>
          </Card>

          <Card className={isDarkMode ? 'bg-gray-800 border-gray-700' : ''}>
            <CardHeader>
              <CardTitle className={isDarkMode ? 'text-white' : 'text-gray-900'}>
                Password Input
              </CardTitle>
              <CardDescription className={isDarkMode ? 'text-gray-300' : ''}>
                Password field with toggle visibility
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <ExpInputField
                label="Password"
                hint="Enter your password"
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
                isDarkMode={isDarkMode}
                validator={passwordValidator}
                hasError={!!formData.password && !!passwordValidator(formData.password)}
                suffixIcon={
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="focus:outline-none"
                  >
                    {showPassword ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </button>
                }
              />
            </CardContent>
          </Card>
        </div>

        {/* States Showcase */}
        <Card className={`mb-12 ${isDarkMode ? 'bg-gray-800 border-gray-700' : ''}`}>
          <CardHeader>
            <CardTitle className={isDarkMode ? 'text-white' : 'text-gray-900'}>
              Input States
            </CardTitle>
            <CardDescription className={isDarkMode ? 'text-gray-300' : ''}>
              Different states and variations of input fields
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <h4 className={`font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Normal State
                </h4>
                <ExpInputField
                  label="Normal Input"
                  hint="This is a normal input"
                  isDarkMode={isDarkMode}
                />
              </div>
              
              <div>
                <h4 className={`font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Error State
                </h4>
                <ExpInputField
                  label="Error Input"
                  hint="This has an error"
                  value="invalid@"
                  isDarkMode={isDarkMode}
                  hasError={true}
                  validator={() => "Invalid email format"}
                />
              </div>
              
              <div>
                <h4 className={`font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Disabled State
                </h4>
                <ExpInputField
                  label="Disabled Input"
                  hint="This is disabled"
                  disabled={true}
                  isDarkMode={isDarkMode}
                  value="Disabled value"
                />
              </div>
              
              <div>
                <h4 className={`font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Dense Input
                </h4>
                <ExpInputField
                  label="Dense Input"
                  hint="Compact spacing"
                  isDense={true}
                  isDarkMode={isDarkMode}
                />
              </div>
              
              <div>
                <h4 className={`font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Custom Border Radius
                </h4>
                <ExpInputField
                  label="Rounded Input"
                  hint="Custom border radius"
                  borderRadius={16}
                  isDarkMode={isDarkMode}
                />
              </div>
              
              <div>
                <h4 className={`font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Textarea Style
                </h4>
                <ExpInputField
                  label="Description"
                  hint="Enter description..."
                  value={formData.description}
                  onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                  isDarkMode={isDarkMode}
                  height={100}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Features */}
        <div>
          <h3 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Features
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className={isDarkMode ? 'bg-gray-800 border-gray-700' : ''}>
              <CardHeader>
                <CardTitle className={`text-lg ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Decorator Pattern
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className={isDarkMode ? 'text-gray-300' : ''}>
                  Uses the decorator pattern to handle light and dark theme styling, matching the Flutter implementation.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className={isDarkMode ? 'bg-gray-800 border-gray-700' : ''}>
              <CardHeader>
                <CardTitle className={`text-lg ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Validation Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className={isDarkMode ? 'text-gray-300' : ''}>
                  Built-in validation with custom error messages and error state styling.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className={isDarkMode ? 'bg-gray-800 border-gray-700' : ''}>
              <CardHeader>
                <CardTitle className={`text-lg ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Theme Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className={isDarkMode ? 'text-gray-300' : ''}>
                  Complete light and dark theme support with appropriate color schemes and hover states.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputFields;
