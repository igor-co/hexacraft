import type { User } from '../model/user.entity';

import type { CreateUserDto } from '../repository/dto/user.dto';
import type { UserRepository } from '../repository/user.repository';

import { UserRepositoryHttpImpl } from '../infrastructure/repository-implementation/user.http.repository-impl';
import { validateCreateUser } from './use-cases/create-user.validation';
import { validateEmail } from '../model/validations/email.validation';
import type {
  FieldsValidationResult,
  ValidationErrors,
} from '../model/validations/validation-errors.type';

type UserServiceType = {
  validateEmail: (email: string) => ValidationErrors;
  createUser: (userData: CreateUserDto) => FieldsValidationResult;
  deleteById: (id: string) => Promise<void>;
  update: (user: User) => Promise<void>;
  get: (id: string) => User;
};

const UserService = (userRepository: UserRepository): UserServiceType => {
  return {
    validateEmail: (email: string): ValidationErrors => {
      return validateEmail(email);
    },
    createUser: (userData: CreateUserDto): FieldsValidationResult => {
      const validationResult = validateCreateUser(userData);
      // Business logic can be added here
      // For example, check if the user already exists
      // Or if the user is allowed to create a new user

      if (validationResult.isValid) {
        // Perform additional logic if needed before creating the user
        userRepository.create(userData);
      }

      return validationResult;
    },

    deleteById: async (id: string): Promise<void> => {
      userRepository.deleteById(id);
    },

    update: async (user: User): Promise<void> => {
      userRepository.update(user);
    },

    get: (id: string) => {
      return userRepository.get(id);
    },
  };
};

export type { UserServiceType };

export { UserService };

export const userHttpServiceInstance = UserService(UserRepositoryHttpImpl);
