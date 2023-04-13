import { formData } from "../../types";

export function validateUsername(value: string): boolean {
  if (value && value.length > 5) {
    return value.includes("!@#$%^&*()_+=-№;%:?//|") ? false : true;
  }
  return false;
}

export function validateEmail(value: string): boolean {
  if (value) {
    const regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(value);
  }
  return false;
}

export function validatePassword(value: string): boolean {
  if (value && value.length > 6) {
    return true;
  }
  return false;
}

export function validateFormData(formData: formData): boolean | string {
  if (!validateEmail(formData.email)) return 'Некорректный email'
  if (!validateUsername(formData.username)) return 'Некорректное имя пользователя'
  if (!validatePassword(formData.password)) return 'Слишком короткий пароль'
  return true;
}
