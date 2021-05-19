import { ILoginValues } from 'components/molecules/SignIn/SignIn';
import React, { useState } from 'react';

const useForm = (initialState: any) => {
  const [formValues, setFormValues] = useState(initialState);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };
  return {
    handleInputChange,
    formValues,
  };
};

export default useForm;
