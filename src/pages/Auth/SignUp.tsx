import React, { useState } from "react";
import { UsernameFormFields } from "../../types";
import { validateFormData } from "../../utils";
import { Button, Form, Input } from "../../components/shared";
import { useMutation } from "@apollo/client";
import { SIGN_UP } from "../../apollo";
import { useNavigate } from "react-router-dom";

const SignUp: React.FC = () => {
  const navigate = useNavigate();

  const [signUp, { error }] = useMutation(SIGN_UP, {
    onCompleted: (data) => {
      localStorage.setItem("token", `Bearer ${data.signUp}`);
      navigate("/");
    },
  });

  const [formFields, setFormFields] = useState<UsernameFormFields>({
    username: "",
    email: "",
    password: "",
  });

  const [validateError, setValidateError] = useState("");

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValidateError("");
    setFormFields({
      ...formFields,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    console.log(formFields);
    const isValid = validateFormData(formFields);
    if (isValid === true) {
      signUp({
        variables: {
          ...formFields,
        },
      });
    } else {
      setValidateError(isValid || "");
    }
  };
  const handleKeyPress = (e: React.KeyboardEvent) => {
    e.key === "Enter" ? handleSubmit : null;
  };

  return (
    <div className="">
      <Form handleSubmit={handleSubmit} handleKeyPress={handleKeyPress}>
        <Input
          type="text"
          required={true}
          htmlFor="username"
          onChange={(e) => handleChange(e)}
        >
          Имя пользователя:
        </Input>
        <Input
          type="email"
          required={true}
          htmlFor="email"
          onChange={(e) => handleChange(e)}
        >
          Электронная почта:
        </Input>

        <Input
          type="password"
          required={true}
          htmlFor="password"
          onChange={(e) => handleChange(e)}
        >
          Пароль:
        </Input>
        <Button type="submit">Зарегистрироваться</Button>
      </Form>
      {validateError && <p>Невалидные данные</p>}
      {error && <p>Такой пользователь существует</p>}
    </div>
  );
};

export default SignUp;
