
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Search, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ExpInputField } from "@/components/input/ExpInputField";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Edit } from "lucide-react";
import { PageHeader } from "@/components/navigation/PageHeader";
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
      <PageHeader 
        title="ExpInputField" 
        description="Advanced input field component with theme support and multiple sizes"
        badge="Components"
      />

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        
        {/* Anatomy Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Anatomy</h2>
          <Card>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-4">Component Structure:</h4>
                  <ol className="list-decimal list-inside space-y-2 text-sm text-gray-600">
                    <li><strong>Label:</strong> Positioned above the input box, indicates what information the user should provide.</li>
                    <li><strong>Input Field:</strong> The main area where users type their response.</li>
                    <li><strong>Placeholder Text:</strong> Light gray text that gives additional guidance on the expected input until the user begins typing.</li>
                    <li><strong>Error/Success Message:</strong> Text that appears below the input field to describe any validations, issues or errors with the input.</li>
                    <li><strong>Border:</strong></li>
                    <li className="ml-4">• Default State: Gray or neutral border for standard input fields.</li>
                    <li className="ml-4">• Error State: Yellow or highlighted border to indicate an issue with the input.</li>
                  </ol>
                </div>
                <div>
                  <ExpInputField
                    label="Example Input"
                    hint="Enter your text here"
                    isDarkMode={false}
                    height={48}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sizes Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Sizes</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Small Size */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Small (32px)</CardTitle>
                <CardDescription>Compact input for tight layouts</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ExpInputField
                  label="Small Input"
                  hint="Text here"
                  height={32}
                  isDarkMode={false}
                />
                <ExpInputField
                  label="Small with Icon"
                  hint="Search..."
                  height={32}
                  suffixIcon={<Search className="w-3 h-3" />}
                  isDarkMode={false}
                />
              </CardContent>
            </Card>

            {/* Medium Size */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Medium (48px)</CardTitle>
                <CardDescription>Standard size for most use cases</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ExpInputField
                  label="Medium Input"
                  hint="Text here"
                  height={48}
                  isDarkMode={false}
                />
                <ExpInputField
                  label="Medium with Icon"
                  hint="Search..."
                  height={48}
                  suffixIcon={<Search className="w-4 h-4" />}
                  isDarkMode={false}
                />
              </CardContent>
            </Card>

            {/* Large Size */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Large (64px)</CardTitle>
                <CardDescription>Prominent input for important fields</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ExpInputField
                  label="Large Input"
                  hint="Text here"
                  height={64}
                  isDarkMode={false}
                />
                <ExpInputField
                  label="Large with Icon"
                  hint="Search..."
                  height={64}
                  suffixIcon={<Search className="w-5 h-5" />}
                  isDarkMode={false}
                />
              </CardContent>
            </Card>
          </div>
        </div>

        {/* States Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">States</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Light Theme States */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Light Theme States</CardTitle>
                <CardDescription>Various states in light mode</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3">Default</h4>
                  <ExpInputField
                    label="Label"
                    hint="Text here"
                    value={lightValue}
                    onChange={(e) => setLightValue(e.target.value)}
                    isDarkMode={false}
                  />
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3">Error State</h4>
                  <ExpInputField
                    label="Label"
                    hint="Text here"
                    hasError={true}
                    validator={() => "Error Message"}
                    isDarkMode={false}
                  />
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Success State</h4>
                  <ExpInputField
                    label="Label"
                    hint="Text here"
                    value="Valid input"
                    isDarkMode={false}
                  />
                  <span className="text-xs text-green-600 mt-1 block">Success</span>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Disabled State</h4>
                  <ExpInputField
                    label="Label"
                    hint="Text here"
                    disabled={true}
                    isDarkMode={false}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Dark Theme States */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Dark Theme States</CardTitle>
                <CardDescription>Various states in dark mode</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 bg-gray-900 rounded-lg p-6">
                <div>
                  <h4 className="font-semibold mb-3 text-white">Default</h4>
                  <ExpInputField
                    label="Label"
                    hint="Text here"
                    value={darkValue}
                    onChange={(e) => setDarkValue(e.target.value)}
                    isDarkMode={true}
                  />
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3 text-white">Error State</h4>
                  <ExpInputField
                    label="Label"
                    hint="Text here"
                    hasError={true}
                    validator={() => "Error Message"}
                    isDarkMode={true}
                  />
                </div>

                <div>
                  <h4 className="font-semibold mb-3 text-white">Success State</h4>
                  <ExpInputField
                    label="Label"
                    hint="Text here"
                    value="Valid input"
                    isDarkMode={true}
                  />
                  <span className="text-xs text-green-400 mt-1 block">Success</span>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 text-white">Disabled State</h4>
                  <ExpInputField
                    label="Label"
                    hint="Text here"
                    disabled={true}
                    isDarkMode={true}
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Advanced Examples */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Advanced Examples</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Interactive Features</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3">Password Field</h4>
                  <ExpInputField
                    label="Password"
                    hint="Enter your password"
                    type={passwordVisible ? "text" : "password"}
                    suffixIcon={
                      <button
                        type="button"
                        onClick={() => setPasswordVisible(!passwordVisible)}
                        className="text-gray-500 hover:text-gray-700"
                      >
                        {passwordVisible ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    }
                    isDarkMode={false}
                  />
                </div>

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
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Custom Styling</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3">Custom Border Radius</h4>
                  <ExpInputField
                    label="Rounded Input"
                    hint="Custom border radius"
                    borderRadius={16}
                    isDarkMode={false}
                  />
                </div>

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
              </CardContent>
            </Card>
          </div>
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
  height={48}
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
  height={48}
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
                      <td className="py-2 px-4">"Label"</td>
                      <td className="py-2 px-4">Label text for the input field</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 px-4 font-mono">hint</td>
                      <td className="py-2 px-4">string</td>
                      <td className="py-2 px-4">"Text here"</td>
                      <td className="py-2 px-4">Placeholder text</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 px-4 font-mono">height</td>
                      <td className="py-2 px-4">number</td>
                      <td className="py-2 px-4">48</td>
                      <td className="py-2 px-4">Height of the input field in pixels</td>
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
