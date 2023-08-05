import { User } from '../../model/user.entity';

type CreateUserDto = Omit<User, 'id' | 'role'>;

export type { CreateUserDto };
