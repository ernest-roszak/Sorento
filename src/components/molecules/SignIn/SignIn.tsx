import React, { useState } from 'react';
import { auth } from '../../../firebase';
import { Wrapper, StyledLink } from './SingIn.styles';
import SideBar from 'views/SideBar/SideBar';
import QuickLogin from '../QucikLogin/QuickLogin';

function login(email: string, password: string) {
  return auth.signInWithEmailAndPassword(email, password);
}

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

function SingIn() {
  const [loginValues, setLoginValues] = useState({
    email: 'test@gmail.com',
    password: 'test123',
  });
  const [openSideBar, setOpenSideBar] = useState(false);
  // const [currentUser, setCurrentUser] = useState<firebase.User | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(loginValues.password, loginValues.email);
    try {
      const result = await login(loginValues.email, loginValues.password);
      console.log(result);
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
