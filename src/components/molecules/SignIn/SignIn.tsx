import React, { useState } from 'react';
import { Wrapper, StyledLink } from './SingIn.styles';
import SideBar from 'components/organisms/SideBar/SideBar';
import QuickLogin from '../QuickLogin/QuickLogin';
import { useAuth } from 'hooks/useAuth';
import { useOpenSideBar } from 'hooks/useOpenSideBar';
import useForm from 'hooks/useForm';

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

export interface ILoginValues {
  email: string;
  password: string;
}

const initialState = {
  email: 'test@gmail.com',
  password: 'test1234',
};

function SingIn() {
  const [openSideBar, setOpenSideBar] = useState(false);
  // const [currentUser, setCurrentUser] = useState<firebase.User | null>(null);
  const { login }: any = useAuth();
  const { handleForgotPasswordOptionOpen } = useOpenSideBar();
  const { handleInputChange, formValues } = useForm(initialState);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(formValues);
    } catch {
      console.log('błąd');
    }
  };

  const handleForgotPassword = () => {
    setOpenSideBar(!openSideBar);
    handleForgotPasswordOptionOpen();
  };
  return (
    <Wrapper>
      <QuickLogin handleInputChange={handleInputChange} handleSubmit={handleSubmit} loginValues={formValues} />

      <StyledLink onClick={handleForgotPassword}>Przypomnij hasło</StyledLink>
      <StyledLink onClick={() => setOpenSideBar(!openSideBar)}>Zarejestruj się</StyledLink>
      <SideBar
        isOpen={openSideBar}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        loginValues={formValues}
      />
    </Wrapper>
  );
}

export default SingIn;
