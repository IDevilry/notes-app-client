import React from "react";
import { Button, Form, Input } from "../../components/shared";

const SignIn: React.FC = () => {
  const handleSubmit = () => {};

  const handleChange = () => {};

  return (
    <Form handleSubmit={handleSubmit}>
      <Input
        type="email"
        name="email"
        required
        placeholder="Электронная почта"
        onChange={handleChange}
      >
        Электронная почта
      </Input>
      <Input
        type="password"
        name="password"
        required
        placeholder="Пароль"
        onChange={handleChange}
      >
        Пароль
      </Input>
      <Button type='submit'>Войти</Button>
    </Form>
  );
};

export default SignIn;
