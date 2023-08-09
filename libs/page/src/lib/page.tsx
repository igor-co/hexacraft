import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

import { UserForm } from './user-form/user-form.view';

type PageProps = {
  /* Add props here */
};

const StyledPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export function Page(props: PageProps) {
  return (
    <StyledPage>
      <h1>Register page</h1>
      <UserForm />
      <Link to="/terms">Terms and conditions</Link>
    </StyledPage>
  );
}

export default Page;
