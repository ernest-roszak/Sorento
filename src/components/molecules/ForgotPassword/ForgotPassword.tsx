import { Button } from 'components/atoms/Button/Button';
import { useAuth } from 'hooks/useAuth';
import useForm from 'hooks/useForm';
import React, { useState } from 'react';
import FormField from '../FormField/FormField';
import { Form } from '../SignIn/SingIn.styles';

interface IInitialState {
  email: string;
}

const initialState: IInitialState = {
  email: '',
};

const ForgotPassword = () => {
  const { handleInputChange, formValues } = useForm(initialState);
  const { resetPassword }: any = useAuth();
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setMessage('');
      setError('');
      setLoading(true);
      await resetPassword(formValues);
      setMessage('Check your inbox for further instructions');
    } catch {
      setError('Failed to reset password');
    }

    setLoading(false);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormField
        name="email"
        id="email"
        value={formValues.email}
        type="text"
        placeholder="Wprowadź e-mail"
        onChange={handleInputChange}
        htmlFor="email"
        label="Adres e-mail:"
      />
      <Button isBig={false} type="submit">
        Przypomnij
      </Button>
    </Form>
  );
};

export default ForgotPassword;
