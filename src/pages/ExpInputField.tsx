
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <PageHeader 
        title="Input Fields" 
        description="Comprehensive input field component with theme support and multiple configurations"
        badge="Components"
      />

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-8 space-y-12">
        
        {/* Anatomy Section */}
        <section>
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Anatomy</h2>
            <p className="text-gray-600 text-sm">Understanding the structure and components of input fields</p>
          </div>
          
          <Card className="shadow-sm">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <h4 className="font-semibold text-lg text-gray-900 mb-4">Component Structure</h4>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-semibold mt-0.5">1</div>
                      <div>
                        <p className="font-medium text-gray-900">Label</p>
                        <p className="text-sm text-gray-600">Positioned above the input, indicates expected information</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-semibold mt-0.5">2</div>
                      <div>
                        <p className="font-medium text-gray-900">Input Field</p>
                        <p className="text-sm text-gray-600">Main typing area with configurable height and styling</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-semibold mt-0.5">3</div>
                      <div>
                        <p className="font-medium text-gray-900">Placeholder Text</p>
                        <p className="text-sm text-gray-600">Hint text that disappears when user starts typing</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-semibold mt-0.5">4</div>
                      <div>
                        <p className="font-medium text-gray-900">Icons & Actions</p>
                        <p className="text-sm text-gray-600">Optional suffix icons for actions like show/hide</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-semibold mt-0.5">5</div>
                      <div>
                        <p className="font-medium text-gray-900">Validation Messages</p>
                        <p className="text-sm text-gray-600">Error or success feedback below the input</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <ExpInputField
                    label="Example Input Field"
                    hint="Enter your text here"
                    isDarkMode={false}
                    height={48}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Sizes Section */}
        <section>
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Sizes</h2>
            <p className="text-gray-600 text-sm">Different input field heights for various use cases</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Small Size */}
            <Card className="shadow-sm">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Small</CardTitle>
                  <Badge variant="outline" className="text-xs">32px</Badge>
                </div>
                <CardDescription>Compact input for tight layouts and secondary fields</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ExpInputField
                  label="Small Input"
                  hint="Compact field"
                  height={32}
                  isDarkMode={false}
                />
                <ExpInputField
                  label="With Icon"
                  hint="Search..."
                  height={32}
                  suffixIcon={<Search className="w-3 h-3 text-gray-400" />}
                  isDarkMode={false}
                />
              </CardContent>
            </Card>

            {/* Medium Size */}
            <Card className="shadow-sm border-2 border-blue-200">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Medium</CardTitle>
                  <Badge className="text-xs">48px</Badge>
                </div>
                <CardDescription>Standard size for most forms and applications</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ExpInputField
                  label="Medium Input"
                  hint="Standard field"
                  height={48}
                  isDarkMode={false}
                />
                <ExpInputField
                  label="With Icon"
                  hint="Search..."
                  height={48}
                  suffixIcon={<Search className="w-4 h-4 text-gray-400" />}
                  isDarkMode={false}
                />
              </CardContent>
            </Card>

            {/* Large Size */}
            <Card className="shadow-sm">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Large</CardTitle>
                  <Badge variant="outline" className="text-xs">64px</Badge>
                </div>
                <CardDescription>Prominent input for important or primary fields</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ExpInputField
                  label="Large Input"
                  hint="Prominent field"
                  height={64}
                  isDarkMode={false}
                />
                <ExpInputField
                  label="With Icon"
                  hint="Search..."
                  height={64}
                  suffixIcon={<Search className="w-5 h-5 text-gray-400" />}
                  isDarkMode={false}
                />
              </CardContent>
            </Card>
          </div>
        </section>

        {/* States Section */}
        <section>
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">States</h2>
            <p className="text-gray-600 text-sm">Different visual states for various interaction scenarios</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Light Theme States */}
            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle className="text-xl flex items-center space-x-2">
                  <span>Light Theme</span>
                  <Badge variant="outline">Default</Badge>
                </CardTitle>
                <CardDescription>Various states in light mode</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3 text-gray-700">Default State</h4>
                  <ExpInputField
                    label="Email Address"
                    hint="Enter your email"
                    value={lightValue}
                    onChange={(e) => setLightValue(e.target.value)}
                    isDarkMode={false}
                  />
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3 text-gray-700">Error State</h4>
                  <ExpInputField
                    label="Email Address"
                    hint="Enter your email"
                    hasError={true}
                    validator={() => "Please enter a valid email address"}
                    isDarkMode={false}
                  />
                </div>

                <div>
                  <h4 className="font-semibold mb-3 text-gray-700">Success State</h4>
                  <ExpInputField
                    label="Email Address"
                    hint="Enter your email"
                    value="user@example.com"
                    isDarkMode={false}
                  />
                  <span className="text-xs text-green-600 mt-1 block">✓ Email is valid</span>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 text-gray-700">Disabled State</h4>
                  <ExpInputField
                    label="Email Address"
                    hint="Field is disabled"
                    disabled={true}
                    isDarkMode={false}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Dark Theme States */}
            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle className="text-xl flex items-center space-x-2">
                  <span>Dark Theme</span>
                  <Badge variant="secondary">Dark</Badge>
                </CardTitle>
                <CardDescription>Various states in dark mode</CardDescription>
              </CardHeader>
              <CardContent className="bg-gray-900 rounded-lg p-6 space-y-6">
                <div>
                  <h4 className="font-semibold mb-3 text-white">Default State</h4>
                  <ExpInputField
                    label="Email Address"
                    hint="Enter your email"
                    value={darkValue}
                    onChange={(e) => setDarkValue(e.target.value)}
                    isDarkMode={true}
                  />
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3 text-white">Error State</h4>
                  <ExpInputField
                    label="Email Address"
                    hint="Enter your email"
                    hasError={true}
                    validator={() => "Please enter a valid email address"}
                    isDarkMode={true}
                  />
                </div>

                <div>
                  <h4 className="font-semibold mb-3 text-white">Success State</h4>
                  <ExpInputField
                    label="Email Address"
                    hint="Enter your email"
                    value="user@example.com"
                    isDarkMode={true}
                  />
                  <span className="text-xs text-green-400 mt-1 block">✓ Email is valid</span>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 text-white">Disabled State</h4>
                  <ExpInputField
                    label="Email Address"
                    hint="Field is disabled"
                    disabled={true}
                    isDarkMode={true}
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Advanced Examples */}
        <section>
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Advanced Examples</h2>
            <p className="text-gray-600 text-sm">Interactive features and custom implementations</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg">Interactive Features</CardTitle>
                <CardDescription>Fields with dynamic behavior and validation</CardDescription>
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
                        className="text-gray-500 hover:text-gray-700 transition-colors"
                      >
                        {passwordVisible ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    }
                    isDarkMode={false}
                  />
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Real-time Validation</h4>
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

            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg">Custom Styling</CardTitle>
                <CardDescription>Fields with custom appearance and behavior</CardDescription>
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
                    suffixIcon={<Search className="w-4 h-4 text-gray-400" />}
                    isDarkMode={false}
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Implementation Guide */}
        <section>
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Implementation</h2>
            <p className="text-gray-600 text-sm">Code examples and usage patterns</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg">Basic Usage</CardTitle>
                <CardDescription>Simple input field implementation</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <pre className="text-sm overflow-x-auto text-gray-800">
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

            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg">With Validation</CardTitle>
                <CardDescription>Input with error handling and validation</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <pre className="text-sm overflow-x-auto text-gray-800">
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
        </section>

        {/* Props Documentation */}
        <section>
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">API Reference</h2>
            <p className="text-gray-600 text-sm">Complete list of available props and their descriptions</p>
          </div>
          
          <Card className="shadow-sm">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="text-left py-4 px-6 font-semibold text-gray-900">Prop</th>
                      <th className="text-left py-4 px-6 font-semibold text-gray-900">Type</th>
                      <th className="text-left py-4 px-6 font-semibold text-gray-900">Default</th>
                      <th className="text-left py-4 px-6 font-semibold text-gray-900">Description</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="py-4 px-6 font-mono text-sm text-blue-600">label</td>
                      <td className="py-4 px-6 text-sm text-gray-600">string</td>
                      <td className="py-4 px-6 text-sm text-gray-500">"Label"</td>
                      <td className="py-4 px-6 text-sm text-gray-700">Label text displayed above the input field</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="py-4 px-6 font-mono text-sm text-blue-600">hint</td>
                      <td className="py-4 px-6 text-sm text-gray-600">string</td>
                      <td className="py-4 px-6 text-sm text-gray-500">"Text here"</td>
                      <td className="py-4 px-6 text-sm text-gray-700">Placeholder text shown when field is empty</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="py-4 px-6 font-mono text-sm text-blue-600">height</td>
                      <td className="py-4 px-6 text-sm text-gray-600">number</td>
                      <td className="py-4 px-6 text-sm text-gray-500">48</td>
                      <td className="py-4 px-6 text-sm text-gray-700">Height of the input field in pixels (32, 48, 64)</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="py-4 px-6 font-mono text-sm text-blue-600">isDarkMode</td>
                      <td className="py-4 px-6 text-sm text-gray-600">boolean</td>
                      <td className="py-4 px-6 text-sm text-gray-500">false</td>
                      <td className="py-4 px-6 text-sm text-gray-700">Enable dark theme styling</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="py-4 px-6 font-mono text-sm text-blue-600">hasError</td>
                      <td className="py-4 px-6 text-sm text-gray-600">boolean</td>
                      <td className="py-4 px-6 text-sm text-gray-500">false</td>
                      <td className="py-4 px-6 text-sm text-gray-700">Show error state with red border and message</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="py-4 px-6 font-mono text-sm text-blue-600">borderRadius</td>
                      <td className="py-4 px-6 text-sm text-gray-600">number</td>
                      <td className="py-4 px-6 text-sm text-gray-500">8</td>
                      <td className="py-4 px-6 text-sm text-gray-700">Border radius in pixels for custom styling</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="py-4 px-6 font-mono text-sm text-blue-600">suffixIcon</td>
                      <td className="py-4 px-6 text-sm text-gray-600">ReactNode</td>
                      <td className="py-4 px-6 text-sm text-gray-500">-</td>
                      <td className="py-4 px-6 text-sm text-gray-700">Icon or component displayed on the right side</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="py-4 px-6 font-mono text-sm text-blue-600">validator</td>
                      <td className="py-4 px-6 text-sm text-gray-600">function</td>
                      <td className="py-4 px-6 text-sm text-gray-500">-</td>
                      <td className="py-4 px-6 text-sm text-gray-700">Function returning error message for validation</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="py-4 px-6 font-mono text-sm text-blue-600">onSubmittedAction</td>
                      <td className="py-4 px-6 text-sm text-gray-600">function</td>
                      <td className="py-4 px-6 text-sm text-gray-500">-</td>
                      <td className="py-4 px-6 text-sm text-gray-700">Callback function triggered when Enter key is pressed</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="py-4 px-6 font-mono text-sm text-blue-600">disabled</td>
                      <td className="py-4 px-6 text-sm text-gray-600">boolean</td>
                      <td className="py-4 px-6 text-sm text-gray-500">false</td>
                      <td className="py-4 px-6 text-sm text-gray-700">Disable user interaction with the input field</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default ExpInputFieldPage;
