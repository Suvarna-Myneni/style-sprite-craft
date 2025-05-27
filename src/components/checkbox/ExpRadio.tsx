
import React from "react";
import "./ExpRadio.css";

interface ExpRadioProps {
  label?: string;
  value: string | number;
  groupValue?: string | number;
  onChange: (value: string | number) => void;
  disabled?: boolean;
  dark?: boolean;
  hasError?: boolean;
}

export const ExpRadio: React.FC<ExpRadioProps> = ({
  label = "Option",
  value,
  groupValue,
  onChange,
  disabled = false,
  dark = false,
  hasError = false,
}) => {
  const isSelected = value === groupValue;

  const getClassName = () => {
    let base = "exp-radio";
    if (dark) base += " dark";
    if (disabled) base += " disabled";
    if (isSelected) base += " selected";
    if (hasError) base += " error";
    return base;
  };

  return (
    <div className={getClassName()} onClick={() => !disabled && onChange(value)}>
      <div className="radio-circle">
        {isSelected && <div className="dot" />}
      </div>
      <span className="label">{label}</span>
    </div>
  );
};
