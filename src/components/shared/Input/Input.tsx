import React from "react";

type CommonInputProps = {
  type: React.HTMLInputTypeAttribute;
  placeholder?: string;
  required?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

type PropsWithLabel = CommonInputProps & {
  htmlForName?: string;
  children?: string;
};

type PropsWithoutLabel = CommonInputProps & {
  htmlForName?: never;
  children?: never;
};

type InputProps = PropsWithoutLabel | PropsWithLabel;

const Input: React.FC<InputProps> = ({
  children,
  htmlForName,
  placeholder,
  type,
  onChange,
  required,
}) => {
  return (
    <>
      {children ? (
        <>
          <label
            htmlFor={htmlForName}
            className="text-[16px] font-medium underline"
          >
            {children}
          </label>
          <input
            className="max-w-[240px] bg-amber-300 p-3 rounded-xl placeholder:text-sky-500"
            name={htmlForName}
            type={type}
            placeholder={placeholder}
            onChange={onChange}
            required={required}
          />
        </>
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          required={required}
        />
      )}
    </>
  );
};

export default Input;
