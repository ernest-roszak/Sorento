import { Button } from 'components/atoms/Button/Button';
import app, { auth } from '../../../firebase';
import React from 'react';
import FormField from '../FormField/FormField';
import { SidebarFormField } from './Registration.styles';
import useForm from 'hooks/useRegistrationForm';
import { useAuth } from 'hooks/useAuth';

export interface IRegistrationFormState {
  email: string;
  password: string;
  repeatPassword: string;
  name: string;
  lastName: string;
  street: string;
  phoneNumber: number;
}

const initialState = {
  email: 'test@gmail.com',
  password: 'test1234',
  repeatPassword: 'test1234',
  name: 'Ernest',
  lastName: 'Roszak',
  street: 'Street',
  phoneNumber: 5434253623633,
};

const Registration = () => {
  const { formValue, handleInputChange, handleThrowError } = useForm(initialState);
  const { signUp }: any = useAuth();

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (formValue.password !== formValue.repeatPassword) {
      return handleThrowError('Podane hasła nie są identyczne. Spróbuj jeszcze raz.');
    }
    await signUp(formValue);
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
      {formValue.error}
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
      <FormField
        name="city"
        id="city"
        value={formValue.city}
        type="text"
        placeholder="Wprowadź miejscowość"
        onChange={handleInputChange}
        htmlFor="city"
        label="Miejscowość:"
      />

      <Button isBig={false} type="submit">
        Zarejestruj
      </Button>
    </SidebarFormField>
  );
};

export default Registration;
