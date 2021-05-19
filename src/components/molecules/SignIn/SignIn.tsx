import React, { useState } from 'react';
import { Wrapper, StyledLink } from './SingIn.styles';
import SideBar from 'components/organisms/SideBar/SideBar';
import QuickLogin from '../QuickLogin/QuickLogin';
import { useAuth } from 'hooks/useAuth';

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(loginValues.password, loginValues.email);
    try {
      const result = await login(loginValues);
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
  return (
    <Wrapper>
      <QuickLogin handleInputChange={handleInputChange} handleSubmit={handleSubmit} loginValues={loginValues} />
      <StyledLink onClick={() => setOpenSideBar(!openSideBar)}>Przypomnij hasło</StyledLink>
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
