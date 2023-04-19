import React from "react";

interface FormProps {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleKeyPress?: (e: React.KeyboardEvent) => void;
  children: React.ReactNode;
}

const Form: React.FC<FormProps> = ({
  children,
  handleSubmit,
  handleKeyPress,
}) => {
  return (
    <form
      onKeyDown={handleKeyPress}
      className="flex flex-col gap-4 items-center justify-center"
      onSubmit={handleSubmit}
    >
      {children}
    </form>
  );
};

export default Form;
