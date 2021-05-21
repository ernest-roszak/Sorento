// import Logo from 'components/atoms/Logo/Logo';
import { IconButton } from '@material-ui/core';
import Logout from 'components/molecules/Logout/Logout';
import SingIn from 'components/molecules/SignIn/SignIn';
import { useAuth } from 'hooks/useAuth';
import styled from 'styled-components';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

export const Wrapper = styled.div`
  background: ${({ theme }) => theme.colors.black};
  height: ${({ theme }) => theme.spaces.loginBarHeight};
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
      {/* <Logo /> */}
      <IconButton color="primary" aria-label="add to shopping cart">
        <AddShoppingCartIcon />
      </IconButton>
      {currentUser ? <Logout /> : <SingIn />}
    </Wrapper>
  );
};

export default LoginBar;
