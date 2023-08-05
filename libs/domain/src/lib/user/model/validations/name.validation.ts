import { ValidationErrors } from './validation-errors.type';

export const validateName = (name: string): ValidationErrors => {
  const errorsKeys: string[] = [];

  const maxCharacters = 20;
  const minCharacters = 2;
  const containsOnlyLetters = /^[a-zA-Z]+$/.test(name);

  if (name.length < minCharacters) {
    errorsKeys.push('Name must be at least 2 characters long.');
  }

  if (name.length > maxCharacters) {
    errorsKeys.push('Name must be less than 20 characters long.');
  }

  if (!containsOnlyLetters) {
    errorsKeys.push('Name must contain only letters.');
  }

  return { errorsKeys, isValid: errorsKeys.length === 0 };
};
