import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface ButtonProps {}

const StyledButton = styled.button`
  color: tomato;
`;

export function Button(props: ButtonProps) {
  return <StyledButton>Button</StyledButton>;
}

export default Button;
