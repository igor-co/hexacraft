import type { UserApiType } from '../../controllers/user.http.controller';
import type { CreateUserDto } from '../../../repository/dto/user.dto';

import { USER_ROLES } from '../../../model/roles.entity';

const UserHttpMapper = {
  dtoToApi: ({ name, email, password }: CreateUserDto): UserApiType => {
    return {
      id: 'uuid',
      firstName: name,
      email,
      password,
      role: USER_ROLES.USER,
    };
  },
};

export { UserHttpMapper };
