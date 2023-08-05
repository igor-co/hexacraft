import type { Email } from '../user.entity';
import type { ValidationErrors } from './validation-errors.type';

export const validateEmail = (email: Email): ValidationErrors => {
  const errorsKeys: string[] = [];

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!email) {
    errorsKeys.push('Email is required.');
  } else if (!emailRegex.test(email)) {
    errorsKeys.push('Email format is invalid.');
  }

  return { errorsKeys, isValid: errorsKeys.length === 0 };
};
