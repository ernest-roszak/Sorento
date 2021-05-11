import { Input } from 'components/atoms/Input/Input';
import { Label } from 'components/atoms/Label/Label';
import React from 'react';
import styled from 'styled-components';
import { FormFieldProps } from '../SignIn/SignIn';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  ${Label} {
    margin: 4px 12px;
  }
`;

const FormField = ({ name, id, value, type, placeholder, onChange, htmlFor, label }: FormFieldProps) => {
  return (
    <Wrapper>
      <Label htmlFor={htmlFor}>{label}</Label>
      <Input name={name} id={id} value={value} type={type} placeholder={placeholder} onChange={onChange}></Input>
    </Wrapper>
  );
};

export default FormField;
