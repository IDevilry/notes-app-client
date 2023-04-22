import React, { InputHTMLAttributes } from "react";

interface CommonInputProps extends InputHTMLAttributes<HTMLInputElement> {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  htmlFor?: string;
  otherProps?: InputHTMLAttributes<HTMLInputElement>;
}

type PropsWithLabel = CommonInputProps & {
  htmlFor?: string;
  children?: string;
};

type PropsWithoutLabel = CommonInputProps & {
  htmlFor?: never;
  children?: never;
};

type InputProps = PropsWithoutLabel | PropsWithLabel;

const Input: React.FC<InputProps> = ({
  children,
  onChange,
  htmlFor,
  ...otherProps
}) => {
  return (
    <>
      {children ? (
        <>
          <label
            className="text-[16px] font-medium underline"
            htmlFor={htmlFor}
          >
            {children}
          </label>
          <input
          name={htmlFor}
            className="max-w-[240px] bg-amber-300 p-3 rounded-xl placeholder:text-sky-500"
            onChange={onChange}
            {...otherProps}
          />
        </>
      ) : (
        <input onChange={onChange} {...otherProps} />
      )}
    </>
  );
};

export default Input;
