import Logo from 'components/atoms/Logo/Logo';
import { SideBarButton, SideBarWrapper } from './SideBar.styles';
import Registration from 'components/molecules/Registration/Registration';
import QuickLogin from 'components/molecules/QuickLogin/QuickLogin';
import { useOpenSideBar } from 'hooks/useOpenSideBar';

const SideBar = ({ isOpen, handleInputChange, handleSubmit, loginValues }: any) => {
  const { handleRegistrationOptionOpen, handleForgotPasswordOptionOpen, handleLoginOptionOpen, isSideBarOptionOpen } =
    useOpenSideBar();
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
