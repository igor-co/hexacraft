import type { CreateUserDto } from '../../repository/dto/user.dto';
import type { FieldsValidationResult } from '../../model/validations/validation-errors.type';

import { validateEmail } from '../../model/validations/email.validation';
import { validateName } from '../../model/validations/name.validation';
import { validatePassword } from '../../model/validations/password.validation';

const validateCreateUser = (
  userData: CreateUserDto
): FieldsValidationResult => {
  const validatedFields: FieldsValidationResult['fields'] = {};

  const nameValidation = validateName(userData.name);
  if (!nameValidation.isValid) {
    validatedFields['name'] = nameValidation;
  }

  const emailValidation = validateEmail(userData.email);
  if (!emailValidation.isValid) {
    validatedFields['email'] = emailValidation;
  }

  const passwordValidation = validatePassword(userData.password);
  if (!passwordValidation.isValid) {
    validatedFields['password'] = passwordValidation;
  }

  const isValid: boolean = Object.keys(validatedFields).length === 0;

  return { fields: validatedFields, isValid };
};

export { validateCreateUser };
