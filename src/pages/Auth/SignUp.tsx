import React, { useState } from "react";
import { formData } from "../../types";
import { validateFormData } from "../../utils";

const SignUp: React.FC = () => {
  const [formData, setFormData] = useState<formData>({
    username: "",
    email: "",
    password: "",
  });
  const [validateError, setValidateError] = useState('');
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValidateError('');
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const isValid = validateFormData(formData)
    if (isValid === true) {
        console.log(formData)
    }
    else {setValidateError(isValid || '')};
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Имя пользователя:</label>
        <input
          type="text"
          required
          placeholder="Имя пользователя"
          name="username"
          onChange={(e) => handleChange(e)}
        />
        <label htmlFor="email">Электронная почта:</label>
        <input
          type="email"
          required
          placeholder="Почта"
          name="email"
          onChange={(e) => handleChange(e)}
        />
        <label htmlFor="password">Пароль:</label>
        <input
          type="password"
          required
          placeholder="Пароль"
          name="password"
          onChange={(e) => handleChange(e)}
        />
        <button type="submit">Зарегистрироваться</button>
      </form>
      {validateError && <p>Невалидные данные</p>}
    </div>
  );
};

export default SignUp;
