import { useNavigate } from 'react-router-dom';
import type { UserServiceType } from '@hexacraft/domain';

import {
  initialFormErrors,
  useUserFormViewState,
} from './user-form.view-state';

export const useUserFormViewModel = (userService: UserServiceType) => {
  const { formErrors, onUserFormDataChange, setFormErrors, userFormData } =
    useUserFormViewState(); // type it?

  const navigate = useNavigate();

  const createUser = async () => {
    try {
      const creationResult = userService.createUser(userFormData);
      return creationResult;
    } catch (error) {
      // handle error here
      // show error message to user
      console.log(error);
    }
  };

  const onEmailChange = (emailData: string) => {
    // validate email using validation service
    const emailValidationResult = userService.validateEmail(emailData);

    if (emailValidationResult.isValid) {
      setFormErrors((prev) => ({
        ...prev,
        email: [],
      }));
    }

    if (!emailValidationResult.isValid) {
      setFormErrors((prev) => ({
        ...prev,
        email: emailValidationResult.errorsKeys,
      }));
    }
  };

  const handleCreateNewUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const creationResult = await createUser();

    console.log('creationResult', creationResult);

    if (creationResult && creationResult.isValid) {
      // Handle successful user creation
      // for example, redirect to user profile page
      setFormErrors(initialFormErrors);
      navigate('/admin');
    } else {
      setFormErrors((prev) => ({
        ...prev,
        name: creationResult?.fields.name?.errorsKeys || [],
        email: creationResult?.fields?.email?.errorsKeys || [],
        password: creationResult?.fields?.password?.errorsKeys || [],
      }));
    }
  };

  return {
    formErrors,
    onEmailChange,
    handleCreateNewUser,
    onUserFormDataChange,
    userFormData,
  };
};
