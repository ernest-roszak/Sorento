import app, { auth } from '../firebase';

import React, { useContext, useEffect, useState, FC } from 'react';
import { IRegistrationFormState } from 'components/molecules/Registration/Registration';
import { LoginValues } from 'components/molecules/SignIn/SignIn';

const AuthContext = React.createContext({});

export const AuthProvider: FC = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user: any) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  function login(loginValues: LoginValues) {
    return auth.signInWithEmailAndPassword(loginValues.email, loginValues.password);
  }
  function logout() {
    return auth.signOut();
  }
  function resetPassword(email: string) {
    return auth.sendPasswordResetEmail(email);
  }

  // function updateEmail(email: string) {
  //   return currentUser.updateEmail(email);
  // }

  // function updatePassword(password: string) {
  //   return currentUser.updatePassword(password);
  // }

  function signUp(formValue: IRegistrationFormState) {
    return auth.createUserWithEmailAndPassword(formValue.email, formValue.password).then((userCredential: any) => {
      // Signed in
      const user = userCredential.user;
      if (user) {
        console.log('JEST', user.uid);
        writeUserData(formValue, user.uid);
      }
      console.log('user', user);
      // ...
    });
    // .catch((error) => {
    //   const errorCode = error.code;
    //   const errorMessage = error.message;
    //   // ..
    // });
  }

  function writeUserData(formValue: IRegistrationFormState, userId: string) {
    app
      .database()
      .ref(`User/${userId}`)
      // .user(userId)
      .set({
        name: formValue.name,
        email: formValue.email,
        lastName: formValue.lastName,
        street: formValue.street,
      });
  }

  const value = {
    currentUser,
    login,
    logout,
    resetPassword,
    signUp,
    // updateEmail,
    // updatePassword,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  // return useContext(AuthContext);
  const authorization = useContext(AuthContext);

  if (!authorization) {
    throw Error('useAuth needs to be used in AuthContext');
  }
  return authorization;
};
