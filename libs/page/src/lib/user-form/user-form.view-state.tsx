import { Reducer, useReducer, useState } from 'react';

import type { User } from '@hexacraft/domain';

const initialUserFormData: Omit<User, 'id' | 'role'> = {
  name: '',
  email: '',
  password: '',
};

type UserFormData = typeof initialUserFormData;

// const ActionTypes = {
//   SET_USER_FORM_DATA: 'SET_USER_FORM_DATA',
// };

// type Action = (typeof ActionTypes)[keyof typeof ActionTypes];

// type Payload = { field: keyof UserFormData; value: string };

// type ActionType = {
//   type: Action;
//   payload: Payload;
// };

// const reducer: Reducer<UserFormData, ActionType> = (
//   state: UserFormData,
//   { type, payload }: ActionType
// ) => {
//   switch (type) {
//     case ActionTypes['SET_USER_FORM_DATA']:
//       return {
//         ...state,
//         [payload.field]: payload.value,
//       };
//     default:
//       return state;
//   }
// };

type FormErrors<T> = {
  [K in keyof T]: string[];
};

const initialFormErrors: FormErrors<typeof initialUserFormData> = {
  name: [],
  email: [],
  password: [],
};

type UserFormDataChange = {
  field: keyof UserFormData;
  value: string;
};

const useUserFormViewState = () => {
  // const [userFormData, dispatch] = useReducer(reducer, initialUserFormData);
  const [userFormData, setUserFormData] = useState(initialUserFormData);
  const [formErrors, setFormErrors] = useState(initialFormErrors);

  // const onUserFormDataChange = ({ field, value }: UserFormDataChange) => {
  //   dispatch({
  //     type: ActionTypes.SET_USER_FORM_DATA,
  //     payload: { field, value },
  //   });
  // };
  const onUserFormDataChange = ({ field, value }: UserFormDataChange) => {
    setUserFormData((prev) => ({ ...prev, [field]: value }));
  };

  return {
    formErrors,
    onUserFormDataChange,
    setFormErrors,
    userFormData,
  };
};

export { initialFormErrors, useUserFormViewState };
