import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ExpCheckbox } from "@/components/checkbox/ExpCheckbox";
import { ExpRadio } from "@/components/checkbox/ExpRadio";
import { CheckboxTile } from "@/components/checkbox/CheckboxTile";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Bell, Shield, Settings } from "lucide-react";

const Checkboxes = () => {
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(true);
  const [radioValue, setRadioValue] = useState("option1");
  const [radioValue2, setRadioValue2] = useState("payment1");
  
  // Tile checkbox states
  const [emailTile, setEmailTile] = useState(false);
  const [notificationTile, setNotificationTile] = useState(true);
  const [securityTile, setSecurityTile] = useState(false);
  const [settingsTile, setSettingsTile] = useState(true);

  // Wrapper functions to handle type conversion
  const handleRadioChange = (value: string | number) => {
    setRadioValue(String(value));
  };

  const handleRadioChange2 = (value: string | number) => {
    setRadioValue2(String(value));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Design System
                </Button>
              </Link>
              <div>
                <h1 className="text-4xl font-bold text-gray-900">Checkboxes & Radio Buttons</h1>
                <p className="text-lg text-gray-600 mt-2">Custom checkbox and radio button components for form inputs</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Badge variant="secondary" className="text-sm px-4 py-2">
                Component
              </Badge>
              <div className="flex items-center space-x-2 ml-4">
                <Link to="/buttons">
                  <Button variant="outline" size="sm">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Buttons
                  </Button>
                </Link>
                <Link to="/navigation">
                  <Button variant="outline" size="sm">
                    Navigation
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Checkbox Tiles */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Checkbox Tiles</CardTitle>
            <CardDescription>Card-style checkboxes with titles and descriptions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <CheckboxTile
                title="Email Notifications"
                description="Receive email updates about your account activity"
                checked={emailTile}
                onChange={setEmailTile}
                icon={<Mail className="w-4 h-4" />}
              />
              <CheckboxTile
                title="Push Notifications"
                description="Get instant notifications on your device"
                checked={notificationTile}
                onChange={setNotificationTile}
                icon={<Bell className="w-4 h-4" />}
              />
              <CheckboxTile
                title="Security Alerts"
                description="Important security updates and alerts"
                checked={securityTile}
                onChange={setSecurityTile}
                icon={<Shield className="w-4 h-4" />}
              />
              <CheckboxTile
                title="Advanced Settings"
                description="Enable advanced configuration options"
                checked={settingsTile}
                onChange={setSettingsTile}
                icon={<Settings className="w-4 h-4" />}
                disabled={true}
              />
            </div>
          </CardContent>
        </Card>

        {/* Basic Checkbox States */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Checkbox Basic States</CardTitle>
            <CardDescription>Default checkbox states and interactions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-4">
              <ExpCheckbox
                label="Unchecked"
                checked={false}
                onChange={(val) => console.log("Unchecked:", val)}
              />
              <ExpCheckbox
                label="Checked"
                checked={true}
                onChange={(val) => console.log("Checked:", val)}
              />
              <ExpCheckbox
                label="Intermediate"
                checked={false}
                intermediate={true}
                onChange={(val) => console.log("Intermediate:", val)}
              />
              <ExpCheckbox
                label="Disabled"
                checked={false}
                disabled={true}
                onChange={(val) => console.log("Disabled:", val)}
              />
            </div>
          </CardContent>
        </Card>

        {/* Radio Button Basic States */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Radio Button Basic States</CardTitle>
            <CardDescription>Default radio button states and interactions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-4">
              <div>
                <h4 className="font-medium mb-3">Basic Radio Group</h4>
                <div className="flex flex-col gap-2">
                  <ExpRadio
                    label="Option 1"
                    value="option1"
                    groupValue={radioValue}
                    onChange={handleRadioChange}
                  />
                  <ExpRadio
                    label="Option 2"
                    value="option2"
                    groupValue={radioValue}
                    onChange={handleRadioChange}
                  />
                  <ExpRadio
                    label="Option 3"
                    value="option3"
                    groupValue={radioValue}
                    onChange={handleRadioChange}
                  />
                </div>
              </div>
              
              <div>
                <h4 className="font-medium mb-3">Disabled Radio Buttons</h4>
                <div className="flex flex-col gap-2">
                  <ExpRadio
                    label="Disabled option"
                    value="disabled1"
                    groupValue="disabled2"
                    onChange={() => {}}
                    disabled={true}
                  />
                  <ExpRadio
                    label="Disabled selected"
                    value="disabled2"
                    groupValue="disabled2"
                    onChange={() => {}}
                    disabled={true}
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Interactive Examples */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Interactive Examples</CardTitle>
            <CardDescription>Checkboxes and radio buttons with state management</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h4 className="font-medium mb-3">Checkboxes</h4>
                <div className="flex flex-col gap-2">
                  <ExpCheckbox
                    label="I agree to the terms and conditions"
                    checked={checked1}
                    onChange={setChecked1}
                  />
                  <ExpCheckbox
                    label="Subscribe to newsletter"
                    checked={checked2}
                    onChange={setChecked2}
                  />
                </div>
              </div>
              
              <div>
                <h4 className="font-medium mb-3">Payment Method</h4>
                <div className="flex flex-col gap-2">
                  <ExpRadio
                    label="Credit Card"
                    value="payment1"
                    groupValue={radioValue2}
                    onChange={handleRadioChange2}
                  />
                  <ExpRadio
                    label="PayPal"
                    value="payment2"
                    groupValue={radioValue2}
                    onChange={handleRadioChange2}
                  />
                  <ExpRadio
                    label="Bank Transfer"
                    value="payment3"
                    groupValue={radioValue2}
                    onChange={handleRadioChange2}
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Dark Theme */}
        <Card className="mb-8 bg-gray-900">
          <CardHeader>
            <CardTitle className="text-white">Dark Theme</CardTitle>
            <CardDescription className="text-gray-300">Checkbox and radio button variants for dark backgrounds</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h4 className="font-medium mb-3 text-white">Dark Checkbox Tiles</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <CheckboxTile
                    title="Dark Email Notifications"
                    description="Receive email updates in dark mode"
                    checked={false}
                    onChange={(val) => console.log("Dark email:", val)}
                    icon={<Mail className="w-4 h-4" />}
                    dark={true}
                  />
                  <CheckboxTile
                    title="Dark Push Notifications"
                    description="Get notifications with dark theme"
                    checked={true}
                    onChange={(val) => console.log("Dark push:", val)}
                    icon={<Bell className="w-4 h-4" />}
                    dark={true}
                  />
                </div>
              </div>
              
              <div>
                <h4 className="font-medium mb-3 text-white">Dark Checkboxes</h4>
                <div className="flex flex-col gap-2">
                  <ExpCheckbox
                    label="Dark unchecked"
                    checked={false}
                    dark={true}
                    onChange={(val) => console.log("Dark unchecked:", val)}
                  />
                  <ExpCheckbox
                    label="Dark checked"
                    checked={true}
                    dark={true}
                    onChange={(val) => console.log("Dark checked:", val)}
                  />
                  <ExpCheckbox
                    label="Dark intermediate"
                    checked={false}
                    intermediate={true}
                    dark={true}
                    onChange={(val) => console.log("Dark intermediate:", val)}
                  />
                </div>
              </div>
              
              <div>
                <h4 className="font-medium mb-3 text-white">Dark Radio Buttons</h4>
                <div className="flex flex-col gap-2">
                  <ExpRadio
                    label="Dark option 1"
                    value="dark1"
                    groupValue="dark1"
                    onChange={() => {}}
                    dark={true}
                  />
                  <ExpRadio
                    label="Dark option 2"
                    value="dark2"
                    groupValue="dark1"
                    onChange={() => {}}
                    dark={true}
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Usage Examples */}
        <Card>
          <CardHeader>
            <CardTitle>Usage Examples</CardTitle>
            <CardDescription>Real-world checkbox and radio button use cases</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h4 className="font-medium mb-3">Form Validation</h4>
                <div className="flex flex-col gap-2">
                  <ExpCheckbox
                    label="I have read and agree to the Privacy Policy"
                    checked={false}
                    onChange={(val) => console.log("Privacy policy:", val)}
                  />
                  <ExpCheckbox
                    label="Send me marketing emails"
                    checked={false}
                    onChange={(val) => console.log("Marketing emails:", val)}
                  />
                </div>
              </div>
              
              <div>
                <h4 className="font-medium mb-3">Settings</h4>
                <div className="flex flex-col gap-2">
                  <ExpCheckbox
                    label="Enable notifications"
                    checked={true}
                    onChange={(val) => console.log("Notifications:", val)}
                  />
                  <ExpCheckbox
                    label="Auto-save documents"
                    checked={true}
                    onChange={(val) => console.log("Auto-save:", val)}
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Checkboxes;
