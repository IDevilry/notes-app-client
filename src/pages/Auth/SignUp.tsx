import React, { useState } from "react";
import { formData } from "../../types";
import { validateFormData } from "../../utils";
import { Button, Form, Input } from "../../components/shared";

const SignUp: React.FC = () => {
  const [formData, setFormData] = useState<formData>({
    username: "",
    email: "",
    password: "",
  });

  const [validateError, setValidateError] = useState("");

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValidateError("");
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const isValid = validateFormData(formData);
    if (isValid === true) {
      console.log(formData);
    } else {
      setValidateError(isValid || "");
    }
  };

  return (
    <div className="">
      <Form handleSubmit={handleSubmit}>
        <Input
          type="text"
          required={true}
          htmlForName="username"
          onChange={(e) => handleChange(e)}
        >
          Имя пользователя:
        </Input>
        <Input
          type="email"
          required={true}
          htmlForName="email"
          onChange={(e) => handleChange(e)}
        >
          Электронная почта:
        </Input>

        <Input
          type="password"
          required={true}
          htmlForName="password"
          onChange={(e) => handleChange(e)}
        >
          Пароль:
        </Input>
        <Button type="submit">Зарегистрироваться</Button>
      </Form>
      {validateError && <p>Невалидные данные</p>}
    </div>
  );
};

export default SignUp;
