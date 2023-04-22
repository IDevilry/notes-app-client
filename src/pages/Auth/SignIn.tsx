import React, { useState } from "react";

import { Button, Form, Input } from "../../components/shared";
import { useLocation, useNavigate } from "react-router-dom";
import { UsernameFormFields } from "../../types";
import { useMutation } from "@apollo/client";
import { SIGN_IN } from "../../apollo";

const SignIn: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const fromPage = location.state?.from || "/";

  const [signIn, { error }] = useMutation(SIGN_IN, {
    onCompleted: (data) => {
      localStorage.setItem("token", `Bearer ${data.signIn}`);
      navigate(fromPage);
    },
  });

  const [formFields, setFormFields] = useState<UsernameFormFields>({
    email: "",
    password: "",
  });

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setFormFields({
      ...formFields,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    signIn({
      variables: {
        email: formFields.email,
        password: formFields.password,
      },
    });
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    e.key === "Enter" ? handleSubmit : null;
  };

  return (
    <Form handleSubmit={handleSubmit} handleKeyPress={handleKeyPress}>
      <Input
        type="email"
        htmlFor="email"
        required
        placeholder="Электронная почта"
        onChange={handleChange}
      >
        Электронная почта
      </Input>
      <Input
        type="password"
        htmlFor="password"
        required
        placeholder="Пароль"
        onChange={handleChange}
      >
        Пароль
      </Input>
      <Button type="submit">Войти</Button>
      {error && <p>Неверный адресс электронной почты или пароль</p>}
    </Form>
  );
};

export default SignIn;
