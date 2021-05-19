import Logo from 'components/atoms/Logo/Logo';
import Logout from 'components/molecules/Logout/Logout';
import SingIn from 'components/molecules/SignIn/SignIn';
import { useAuth } from 'hooks/useAuth';
import styled from 'styled-components';

export const Wrapper = styled.div`
  background: ${({ theme }) => theme.colors.black};
  height: 85px;
  width: 100%;
  overflow-x: scroll;
  display: flex;
  justify-content: space-between;
`;

const LoginBar = () => {
  const { currentUser }: any = useAuth();
  console.log(currentUser);

  return (
    <Wrapper>
      <Logo />
      {currentUser ? <Logout /> : <SingIn />}
    </Wrapper>
  );
};

export default LoginBar;
