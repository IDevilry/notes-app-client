import React from "react";

interface FormProps {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  children: React.ReactNode;
}

const Form: React.FC<FormProps> = ({ children, handleSubmit }: FormProps) => {
  return (
    <form
      className="flex flex-col gap-4 items-center justify-center"
      onSubmit={handleSubmit}
    >
      {children}
    </form>
  );
};

export default Form;
