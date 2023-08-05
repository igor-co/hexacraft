import { UserRole } from './roles.entity';

type Email = string;
type Password = string;

type User = {
  email: Email;
  id: string;
  name: string;
  password: Password;
  role: UserRole;
};

type UserAlgolia = User & {
  validate: () => boolean;
};

export type { Email, Password, User };
