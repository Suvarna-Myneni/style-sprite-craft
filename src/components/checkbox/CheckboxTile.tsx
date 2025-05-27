
import React from "react";
import { ExpCheckbox } from "./ExpCheckbox";
import { Card, CardContent } from "@/components/ui/card";

interface CheckboxTileProps {
  title: string;
  description?: string;
  checked?: boolean;
  disabled?: boolean;
  dark?: boolean;
  onChange?: (value: boolean) => void;
  icon?: React.ReactNode;
}

export const CheckboxTile: React.FC<CheckboxTileProps> = ({
  title,
  description,
  checked = false,
  disabled = false,
  dark = false,
  onChange,
  icon,
}) => {
  return (
    <Card className={`cursor-pointer transition-all hover:shadow-md ${
      checked ? 'border-blue-500 bg-blue-50' : ''
    } ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${
      dark ? 'bg-gray-800 border-gray-700' : ''
    }`}>
      <CardContent className="p-4">
        <div className="flex items-start gap-3">
          <ExpCheckbox
            checked={checked}
            disabled={disabled}
            dark={dark}
            onChange={onChange}
          />
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              {icon && <span className="text-lg">{icon}</span>}
              <h4 className={`font-medium ${dark ? 'text-white' : 'text-gray-900'}`}>
                {title}
              </h4>
            </div>
            {description && (
              <p className={`text-sm ${dark ? 'text-gray-300' : 'text-gray-600'}`}>
                {description}
              </p>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
