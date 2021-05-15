import { Button } from 'components/atoms/Button/Button';
import app, { auth } from '../../../firebase';
import React, { useReducer } from 'react';
import FormField from '../FormField/FormField';
import { SidebarFormField } from './Registration.styles';

interface IRegistrationFormState {
  email: string;
  password: string;
  repeatPassword: string;
  name: string;
  lastName: string;
  street: string;
}

// interface IActionTypes {
//   type: string;
//   value?: string;
//   field: string;
//   initialState?: IRegistrationFormState;
// }

const initialState = {
  email: 'test6@gmail.com',
  password: 'test1234',
  repeatPassword: 'test1234',
  name: 'Ernest',
  lastName: 'Roszak',
  street: 'Street',
};

const actionTypes = {
  inputChange: 'INPUT CHANGE',
  clearForm: 'CLEAR FORM',
};

const reducer = (state: IRegistrationFormState, action: any) => {
  switch (action.type) {
    case actionTypes.inputChange:
      return {
        ...state,
        [action.field]: action.value,
      };
    case actionTypes.clearForm:
      return {
        ...action.initialState,
      };
  }
};

function signup(formValue: IRegistrationFormState) {
  return auth
    .createUserWithEmailAndPassword(formValue.email, formValue.password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      if (user) {
        console.log('JEST', user);
        writeUserData(formValue, user.uid);
      }
      console.log('user', user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
}

function writeUserData(formValue: IRegistrationFormState, userId: string) {
  app
    .database()
    .ref('users/' + userId)
    // .user(userId)
    .set({
      name: formValue.name,
      email: formValue.email,
      lastName: formValue.lastName,
      street: formValue.street,
    });
}

const Registration = () => {
  const [formValue, dispatch] = useReducer(reducer, initialState);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      field: e.target.name,
      value: e.target.value,
      type: actionTypes.inputChange,
    });
  };
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    signup(formValue);
    dispatch({ type: actionTypes.clearForm, initialState });
  };
  return (
    <SidebarFormField as="form" onSubmit={handleSubmit}>
      <FormField
        name="email"
        id="email"
        value={formValue.email}
        type="text"
        placeholder="Wprowadź e-mail"
        onChange={handleInputChange}
        htmlFor="email"
        label="E-mail:"
      />
      <FormField
        name="password"
        id="password"
        value={formValue.password}
        type="text"
        placeholder="Wprowadź hasło"
        onChange={handleInputChange}
        htmlFor="password"
        label="Hasło:"
      />
      <FormField
        name="repeatPassword"
        id="repeatPassword"
        value={formValue.repeatPassword}
        type="text"
        placeholder="Powtórz hasło"
        onChange={handleInputChange}
        htmlFor="repeatPassword"
        label="Powtórz:"
      />
      <FormField
        name="name"
        id="name"
        value={formValue.name}
        type="text"
        placeholder="Wprowadź imię"
        onChange={handleInputChange}
        htmlFor="name"
        label="Imię:"
      />
      <FormField
        name="lastName"
        id="lastName"
        value={formValue.lastName}
        type="text"
        placeholder="Wprowadź nazwisko"
        onChange={handleInputChange}
        htmlFor="lastName"
        label="Nazwisko:"
      />
      <FormField
        name="street"
        id="street"
        value={formValue.street}
        type="text"
        placeholder="Wprowadź ulicę"
        onChange={handleInputChange}
        htmlFor="street"
        label="Ulica:"
      />

      <Button isBig={false} type="submit">
        Zarejestruj
      </Button>
    </SidebarFormField>
  );
};

export default Registration;
