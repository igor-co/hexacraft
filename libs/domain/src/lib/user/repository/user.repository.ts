import type { User } from '../model/user.entity';
import type { CreateUserDto } from './dto/user.dto';

type UserRepository = {
  readonly create: (userData: CreateUserDto) => void;
  readonly deleteById: (id: User['id']) => void;
  readonly update: (user: User) => void;
  readonly get: (id: User['id']) => User;
};

export type { UserRepository };
