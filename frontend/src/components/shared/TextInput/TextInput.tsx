import { Box } from "@mui/material";
import React, { ChangeEvent } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { onNumberValidator } from "../../../constants/utils/utils";

export type ITextInputProps = {
  placeholder?: string;
  label?: string;
  type?: string;
  required?: boolean;
  labelStyle?: string;
  customStyles?: string;
  onChange?: any;
  value?: any;
  name?: string;
  error?: string;
  icon?: React.ReactNode;
  disabled?: boolean;
  extenstion?: React.ReactNode | string;
  isNumber?: string;
  inputRef?: any;
};

const TextInput = ({
  label,
  labelStyle,
  required,
  customStyles,
  error,
  name,
  value,
  icon,
  disabled,
  type,
  placeholder,
  onChange,
  isNumber,
  inputRef,
}: ITextInputProps) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  return (
    <div className={` ${customStyles} mb-7`}>
      <label
        htmlFor={name}
        className={`block text-sm  text-black font-medium mb-2 ${labelStyle} `}
      >
        {label} {required && <span className="bg-red-600">*</span>}
      </label>
      <div className="relative">
        <input
          type={showPassword && type === "password" ? "text" : type}
          id={name}
          name={name}
          className="py-3 px-4 pe-11 block w-full outline-primaryGray bg-transparent  focus:outline-primary  border-primaryGray rounded-lg text-sm focus:z-10 focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none"
          placeholder={placeholder ?? ""}
          disabled={disabled}
          ref={inputRef}
          value={value}
          onChange={
            isNumber
              ? (e: ChangeEvent<HTMLInputElement>) => {
                  onNumberValidator(e, onChange);
                }
              : onChange
          }
        />
        {icon && (
          <div className="absolute inset-y-0 end-0 flex items-center pointer-events-none z-20 pe-4">
            {icon}
          </div>
        )}
        {type === "password" && (
          <Box
            onClick={handleClickShowPassword}
            className="absolute inset-y-0 end-0 flex items-center  z-20 pe-4 cursor-pointer"
          >
            {showPassword ? <BsEyeSlash /> : <BsEye className="text-[20px]" />}
          </Box>
        )}
      </div>
      {error && <span>{error}</span>}
    </div>
  );
};

export default TextInput;
