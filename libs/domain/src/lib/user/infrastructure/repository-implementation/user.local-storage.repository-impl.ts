import type { User } from '../../model/user.entity';
import type { UserRepository } from '../../repository/user.repository';

import { UserHttpController } from '../controllers/user.http.controller';
import { UserHttpMapper } from './mappers/user.http.mapper';

const UserRepositoryHttpImpl: UserRepository = {
  create: (userData) => {
    const mappedUserData = UserHttpMapper.dtoToApi(userData);
    UserHttpController.create(mappedUserData);
  },

  deleteById: (id) => {
    // Perform the actual deletion of the user
    console.log('User deleted', id);
  },

  update: (user) => {
    // Perform the actual update of the user
    console.log('User updated', user);
  },

  get: (id) => {
    // Perform the actual update of the user
    console.log('User updated', id);
    return {} as User;
  },
};

export { UserRepositoryHttpImpl };
