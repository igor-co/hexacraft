import { User } from '../../model/user.entity';

type UserApiType = Omit<User, 'name'> & {
  firstName: string;
};

const create = ({ email, firstName, id, password, role }: UserApiType) => {
  fetch('https://dummyjson.com/users/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email,
      firstName,
      id,
      password,
      role,
    }),
  })
    .then((res) => res.json())
    .then(console.log);
};

export const UserHttpController = {
  create,
};

export type { UserApiType };
