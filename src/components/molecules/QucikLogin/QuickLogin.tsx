import { Button } from 'components/atoms/Button/Button';
import React from 'react';
import FormField from '../FormField/FormField';
import { Form } from '../SignIn/SingIn.styles';

const QuickLogin = ({ handleInputChange, handleSubmit, loginValues }: any) => {
  return (
    <Form onSubmit={handleSubmit}>
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
    </Form>
  );
};

export default QuickLogin;
