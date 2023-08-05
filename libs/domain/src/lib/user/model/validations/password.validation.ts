import type { User } from '../user.entity';
import type { ValidationErrors } from './validation-errors.type';

const validatePassword = (password: User['password']): ValidationErrors => {
  const errorsKeys: string[] = [];

  const hasAtLeastOneSpecialCharacter =
    /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(password);
  const hasLowercaseLetter = /[a-z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasUppercaseLetter = /[A-Z]/.test(password);
  const maxCharacters = 20;
  const minCharacters = 8;

  if (password.length < minCharacters) {
    errorsKeys.push('Password must be at least 8 characters long.');
  }

  if (password.length > maxCharacters) {
    errorsKeys.push('Password must be less than 20 characters long.');
  }

  if (!hasAtLeastOneSpecialCharacter) {
    errorsKeys.push('Password must contain at least one special character.');
  }

  if (!hasUppercaseLetter) {
    errorsKeys.push('Password must contain at least one uppercase letter.');
  }

  if (!hasLowercaseLetter) {
    errorsKeys.push('Password must contain at least one lowercase letter.');
  }

  if (!hasNumber) {
    errorsKeys.push('Password must contain at least one number.');
  }

  return { errorsKeys, isValid: errorsKeys.length === 0 };
};

export { validatePassword };
