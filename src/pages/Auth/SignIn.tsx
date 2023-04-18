import React, { useState } from "react";

import { Button, Form, Input } from "../../components/shared";
import { useLocation, useNavigate } from "react-router-dom";
import { formData } from "../../types";
import { useMutation, useApolloClient } from "@apollo/client";
import { SIGN_IN } from "../../apollo";

const SignIn: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const fromPage = location.state?.from || "/";

  const client = useApolloClient()

  const [signIn, { error }] = useMutation(SIGN_IN, {
    onCompleted: (data) => {
      localStorage.setItem("token", `Bearer ${data.signIn}`);
      navigate(fromPage);
    },
  });

  const [formData, setFormData] = useState<formData>({
    email: "",
    password: "",
  });

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    signIn({
      variables: {
        email: formData.email,
        password: formData.password,
      },
    });
  };

  return (
    <Form handleSubmit={handleSubmit}>
      <Input
        type="email"
        htmlForName="email"
        required
        placeholder="Электронная почта"
        onChange={handleChange}
      >
        Электронная почта
      </Input>
      <Input
        type="password"
        htmlForName="password"
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
