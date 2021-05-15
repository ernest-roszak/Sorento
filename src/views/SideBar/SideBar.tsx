import React, { useState } from 'react';
import Logo from 'components/atoms/Logo/Logo';
import { SideBarButton, SideBarWrapper } from './SideBar.styles';
import Registration from 'components/molecules/Registration/Registration';
import QuickLogin from 'components/molecules/QucikLogin/QuickLogin';

const SideBar = ({ isOpen, handleInputChange, handleSubmit, loginValues }: any) => {
  const [isSideBarOptionOpen, setSideBarOptionOpen] = useState({
    isRegistrationOpen: false,
    isLoginOpen: false,
    isForgotPasswordOpen: false,
  });

  const handleRegistrationOptionOpen = () => {
    setSideBarOptionOpen({
      isRegistrationOpen: true,
      isLoginOpen: false,
      isForgotPasswordOpen: false,
    });
  };
  const handleLoginOptionOpen = () => {
    setSideBarOptionOpen({
      isRegistrationOpen: false,
      isLoginOpen: true,
      isForgotPasswordOpen: false,
    });
  };
  const handleForgotPasswordOptionOpen = () => {
    setSideBarOptionOpen({
      isRegistrationOpen: false,
      isLoginOpen: false,
      isForgotPasswordOpen: true,
    });
  };
  return (
    <SideBarWrapper isOpen={isOpen}>
      <Logo />
      <SideBarButton onClick={handleRegistrationOptionOpen}>Rejestracja</SideBarButton>
      {isSideBarOptionOpen.isRegistrationOpen ? <Registration /> : null}
      <SideBarButton onClick={handleLoginOptionOpen}>Logowanie</SideBarButton>
      {isSideBarOptionOpen.isLoginOpen ? (
        <QuickLogin handleInputChange={handleInputChange} handleSubmit={handleSubmit} loginValues={loginValues} />
      ) : null}
      <SideBarButton onClick={handleForgotPasswordOptionOpen}>Przypomnienie hasła</SideBarButton>
      {isSideBarOptionOpen.isForgotPasswordOpen ? <Registration /> : null}
    </SideBarWrapper>
  );
};

export default SideBar;
