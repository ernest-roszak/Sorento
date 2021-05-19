import React, { useState } from 'react';

const allOptionsClose = {
  isRegistrationOpen: false,
  isLoginOpen: false,
  isForgotPasswordOpen: false,
};

export const useOpenSideBar = () => {
  const [isSideBarOptionOpen, setSideBarOptionOpen] = useState(allOptionsClose);

  const handleRegistrationOptionOpen = () => {
    if (isSideBarOptionOpen.isRegistrationOpen) {
      setSideBarOptionOpen(allOptionsClose);
    } else {
      setSideBarOptionOpen({
        isRegistrationOpen: true,
        isLoginOpen: false,
        isForgotPasswordOpen: false,
      });
    }
  };
  const handleLoginOptionOpen = () => {
    if (isSideBarOptionOpen.isLoginOpen) {
      setSideBarOptionOpen(allOptionsClose);
    } else {
      setSideBarOptionOpen({
        isRegistrationOpen: false,
        isLoginOpen: true,
        isForgotPasswordOpen: false,
      });
    }
  };
  const handleForgotPasswordOptionOpen = () => {
    if (isSideBarOptionOpen.isForgotPasswordOpen) {
      setSideBarOptionOpen(allOptionsClose);
    } else {
      setSideBarOptionOpen({
        isRegistrationOpen: false,
        isLoginOpen: false,
        isForgotPasswordOpen: true,
      });
    }
  };
  return {
    handleRegistrationOptionOpen,
    handleForgotPasswordOptionOpen,
    handleLoginOptionOpen,
    isSideBarOptionOpen,
  };
};
