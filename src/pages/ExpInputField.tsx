
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Search, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ExpInputField } from "@/components/input/ExpInputField";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input as InputIcon } from "lucide-react";
import { 
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useState } from "react";

const ExpInputFieldPage = () => {
  const [lightValue, setLightValue] = useState("");
  const [darkValue, setDarkValue] = useState("");
  const [errorValue, setErrorValue] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const emailValidator = (value: string) => {
    if (!value) return "Email is required";
    if (!/\S+@\S+\.\S+/.test(value)) return "Please enter a valid email";
    return undefined;
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
                    <BreadcrumbPage>ExpInputField</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-lg bg-[#0c0f24] flex items-center justify-center">
                  <InputIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-4xl font-bold text-gray-900">ExpInputField</h1>
                  <p className="text-lg text-gray-600 mt-2">Advanced input field component with theme support</p>
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Light Theme Examples */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Light Theme</CardTitle>
              <CardDescription>
                Default light theme styling with various states and configurations.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold mb-3">Basic Input</h4>
                <ExpInputField
                  label="Full Name"
                  hint="Enter your full name"
                  value={lightValue}
                  onChange={(e) => setLightValue(e.target.value)}
                  isDarkMode={false}
                />
              </div>
              
              <div>
                <h4 className="font-semibold mb-3">With Suffix Icon</h4>
                <ExpInputField
                  label="Search"
                  hint="Search for anything..."
                  suffixIcon={<Search className="w-4 h-4" />}
                  isDarkMode={false}
                />
              </div>

              <div>
                <h4 className="font-semibold mb-3">Dense Layout</h4>
                <ExpInputField
                  label="Compact Input"
                  hint="Dense layout"
                  isDense={true}
                  isDarkMode={false}
                />
              </div>

              <div>
                <h4 className="font-semibold mb-3">Disabled State</h4>
                <ExpInputField
                  label="Disabled Input"
                  hint="This is disabled"
                  disabled={true}
                  isDarkMode={false}
                />
              </div>
            </CardContent>
          </Card>

          {/* Dark Theme Examples */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Dark Theme</CardTitle>
              <CardDescription>
                Dark theme styling with orange error states and blue focus colors.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 bg-gray-900 rounded-lg p-6">
              <div>
                <h4 className="font-semibold mb-3 text-white">Basic Input</h4>
                <ExpInputField
                  label="Username"
                  hint="Enter your username"
                  value={darkValue}
                  onChange={(e) => setDarkValue(e.target.value)}
                  isDarkMode={true}
                />
              </div>
              
              <div>
                <h4 className="font-semibold mb-3 text-white">Password Field</h4>
                <ExpInputField
                  label="Password"
                  hint="Enter your password"
                  type={passwordVisible ? "text" : "password"}
                  suffixIcon={
                    <button
                      type="button"
                      onClick={() => setPasswordVisible(!passwordVisible)}
                      className="text-blue-400 hover:text-blue-300"
                    >
                      {passwordVisible ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  }
                  isDarkMode={true}
                />
              </div>

              <div>
                <h4 className="font-semibold mb-3 text-white">Custom Border Radius</h4>
                <ExpInputField
                  label="Rounded Input"
                  hint="Custom border radius"
                  borderRadius={16}
                  isDarkMode={true}
                />
              </div>

              <div>
                <h4 className="font-semibold mb-3 text-white">Disabled State</h4>
                <ExpInputField
                  label="Disabled Input"
                  hint="This is disabled"
                  disabled={true}
                  isDarkMode={true}
                />
              </div>
            </CardContent>
          </Card>

          {/* Error States */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Error States</CardTitle>
              <CardDescription>
                Input fields with validation errors and custom validators.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold mb-3">Email Validation</h4>
                <ExpInputField
                  label="Email Address"
                  hint="Enter your email"
                  value={errorValue}
                  onChange={(e) => setErrorValue(e.target.value)}
                  hasError={!!errorValue && !!emailValidator(errorValue)}
                  validator={emailValidator}
                  isDarkMode={false}
                />
              </div>

              <div>
                <h4 className="font-semibold mb-3">Required Field Error</h4>
                <ExpInputField
                  label="Required Field"
                  hint="This field is required"
                  hasError={true}
                  validator={() => "This field is required"}
                  isDarkMode={false}
                />
              </div>
            </CardContent>
          </Card>

          {/* Advanced Features */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Advanced Features</CardTitle>
              <CardDescription>
                Demonstration of advanced features like submit actions and custom styling.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold mb-3">Submit on Enter</h4>
                <ExpInputField
                  label="Quick Search"
                  hint="Press Enter to search"
                  onSubmittedAction={(value) => alert(`Searching for: ${value}`)}
                  suffixIcon={<Search className="w-4 h-4" />}
                  isDarkMode={false}
                />
              </div>

              <div>
                <h4 className="font-semibold mb-3">Custom Height</h4>
                <ExpInputField
                  label="Tall Input"
                  hint="Custom height input"
                  height={60}
                  isDarkMode={false}
                />
              </div>

              <div>
                <h4 className="font-semibold mb-3">Custom Label Style</h4>
                <ExpInputField
                  label="Styled Label"
                  hint="Custom label styling"
                  labelTextStyle="text-purple-600 font-bold"
                  isDarkMode={false}
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Implementation Guide */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Implementation Guide</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Basic Usage</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-100 p-4 rounded-lg">
                  <pre className="text-sm overflow-x-auto">
{`<ExpInputField
  label="Email"
  hint="Enter your email"
  isDarkMode={false}
  onChange={(e) => setValue(e.target.value)}
/>`}
                  </pre>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">With Validation</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-100 p-4 rounded-lg">
                  <pre className="text-sm overflow-x-auto">
{`<ExpInputField
  label="Email"
  hint="Enter your email"
  hasError={!!error}
  validator={(value) => 
    !value ? "Required" : 
    !/\S+@\S+\.\S+/.test(value) ? 
    "Invalid email" : undefined
  }
  isDarkMode={false}
/>`}
                  </pre>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Props Documentation */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Props</h3>
          <Card>
            <CardContent className="p-6">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2 px-4 font-semibold">Prop</th>
                      <th className="text-left py-2 px-4 font-semibold">Type</th>
                      <th className="text-left py-2 px-4 font-semibold">Default</th>
                      <th className="text-left py-2 px-4 font-semibold">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-2 px-4 font-mono">label</td>
                      <td className="py-2 px-4">string</td>
                      <td className="py-2 px-4">-</td>
                      <td className="py-2 px-4">Label text for the input field</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 px-4 font-mono">hint</td>
                      <td className="py-2 px-4">string</td>
                      <td className="py-2 px-4">-</td>
                      <td className="py-2 px-4">Placeholder text</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 px-4 font-mono">isDarkMode</td>
                      <td className="py-2 px-4">boolean</td>
                      <td className="py-2 px-4">false</td>
                      <td className="py-2 px-4">Enable dark theme styling</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 px-4 font-mono">hasError</td>
                      <td className="py-2 px-4">boolean</td>
                      <td className="py-2 px-4">false</td>
                      <td className="py-2 px-4">Show error state styling</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 px-4 font-mono">isDense</td>
                      <td className="py-2 px-4">boolean</td>
                      <td className="py-2 px-4">false</td>
                      <td className="py-2 px-4">Use compact padding</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 px-4 font-mono">borderRadius</td>
                      <td className="py-2 px-4">number</td>
                      <td className="py-2 px-4">8</td>
                      <td className="py-2 px-4">Border radius in pixels</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 px-4 font-mono">suffixIcon</td>
                      <td className="py-2 px-4">ReactNode</td>
                      <td className="py-2 px-4">-</td>
                      <td className="py-2 px-4">Icon to display on the right side</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 px-4 font-mono">validator</td>
                      <td className="py-2 px-4">function</td>
                      <td className="py-2 px-4">-</td>
                      <td className="py-2 px-4">Validation function returning error message</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 font-mono">onSubmittedAction</td>
                      <td className="py-2 px-4">function</td>
                      <td className="py-2 px-4">-</td>
                      <td className="py-2 px-4">Callback when Enter key is pressed</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ExpInputFieldPage;
