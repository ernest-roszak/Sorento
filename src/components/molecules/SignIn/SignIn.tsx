import { Button } from 'components/atoms/Button/Button';
import React, { useState } from 'react';
import { auth } from '../../../firebase';
import FormField from 'components/molecules/FormField/FormField';
import { Wrapper, StyledLink } from './SingIn.styles';

function login(email: string, password: string) {
  return auth.signInWithEmailAndPassword(email, password);
}

export type FormFieldProps = {
  name: string;
  id: string;
  value: string;
  type: string;
  placeholder: string;
  onChange: any;
  htmlFor: string;
  label: string;
};

function SingIn() {
  const [loginValues, setLoginValues] = useState({
    email: 'test@gmail.com',
    password: 'test123',
  });
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
    <Wrapper onSubmit={handleSubmit}>
      <FormField
        name="email"
        id="email"
        value={loginValues.email}
        type="text"
        placeholder="Wprowadź e-mail"
        onChange={handleInputChange}
        htmlFor="email"
        label="Adres e-mail:"
      />
      <FormField
        name="password"
        id="password"
        value={loginValues.password}
        type="text"
        placeholder="password"
        onChange={handleInputChange}
        htmlFor="Wprowadź hasło"
        label="Hasło:"
      />
      <Button isBig={false} type="submit">
        Zaloguj
      </Button>
      <StyledLink></StyledLink>
      <StyledLink>Przypomnij hasło</StyledLink>
      <StyledLink>Zarejestruj się</StyledLink>
    </Wrapper>
  );
}

export default SingIn;
