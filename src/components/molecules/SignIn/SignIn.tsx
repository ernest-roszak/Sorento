import React, { useState } from 'react';
import { Wrapper, StyledLink } from './SingIn.styles';
import SideBar from 'components/organisms/SideBar/SideBar';
import QuickLogin from '../QuickLogin/QuickLogin';
import { useAuth } from 'hooks/useAuth';
import { useOpenSideBar } from 'hooks/useOpenSideBar';

export interface FormFieldProps {
  name: string;
  id: string;
  value: string;
  type: string;
  placeholder: string;
  onChange: any;
  htmlFor: string;
  label: string;
}

export interface LoginValues {
  email: string;
  password: string;
}

function SingIn() {
  const [loginValues, setLoginValues] = useState({
    email: 'test@gmail.com',
    password: 'test1234',
  });
  const [openSideBar, setOpenSideBar] = useState(false);
  // const [currentUser, setCurrentUser] = useState<firebase.User | null>(null);
  const { login }: any = useAuth();
  const { handleForgotPasswordOptionOpen } = useOpenSideBar();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(loginValues);
    } catch {
      console.log('błąd');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginValues({
      ...loginValues,
      [e.target.name]: e.target.value,
    });
  };
  const handleForgotPassword = () => {
    setOpenSideBar(!openSideBar);
    handleForgotPasswordOptionOpen();
  };
  return (
    <Wrapper>
      <QuickLogin handleInputChange={handleInputChange} handleSubmit={handleSubmit} loginValues={loginValues} />

      <StyledLink onClick={handleForgotPassword}>Przypomnij hasło</StyledLink>
      <StyledLink onClick={() => setOpenSideBar(!openSideBar)}>Zarejestruj się</StyledLink>
      <SideBar
        isOpen={openSideBar}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        loginValues={loginValues}
      />
    </Wrapper>
  );
}

export default SingIn;
