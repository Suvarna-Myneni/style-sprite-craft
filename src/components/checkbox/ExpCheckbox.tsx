
import React, { useState } from "react";
import "./ExpCheckbox.css";

interface ExpCheckboxProps {
  label?: string;
  checked?: boolean;
  disabled?: boolean;
  intermediate?: boolean;
  dark?: boolean;
  onChange?: (value: boolean) => void;
}

export const ExpCheckbox: React.FC<ExpCheckboxProps> = ({
  label = "Label",
  checked = false,
  disabled = false,
  intermediate = false,
  dark = false,
  onChange,
}) => {
  const [value, setValue] = useState(checked);

  const handleClick = () => {
    if (disabled) return;
    const newValue = !value;
    setValue(newValue);
    onChange?.(newValue);
  };

  const getClassName = () => {
    let base = "exp-checkbox";
    if (dark) base += " dark";
    if (disabled) base += " disabled";
    else if (intermediate) base += " intermediate";
    else if (value) base += " checked";
    return base;
  };

  return (
    <div className={getClassName()} onClick={handleClick}>
      <div className="box">
        {intermediate && !value ? <div className="dash" /> : null}
        {value && !intermediate ? <div className="tick" /> : null}
      </div>
      <span className="label">{label}</span>
    </div>
  );
};
