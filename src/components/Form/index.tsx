import React, { useEffect, useRef } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { FiSearch, FiX } from 'react-icons/fi';

import Input from '../Input';
import Button from '../Button';

import { FormContainer, CloseFormButton } from './styles';

interface FormProps {
  openForm: boolean;
  setOpenForm(open: boolean): void;
  handleSubmit(data: { city: string }): void;
}

const FormComponent: React.FC<FormProps> = ({ 
  openForm, 
  setOpenForm, 
  handleSubmit
}) => {
  const formRef = useRef<FormHandles>(null);

  useEffect(() => {
    formRef.current?.clearField('city');
  }, [openForm]);

  return (
    <FormContainer openModal={openForm}>
      <Form ref={formRef} initialData={{}} onSubmit={handleSubmit}>
        <h1>Buscar por cidade</h1>

        <Input name="city" icon={FiSearch} placeholder="Cidade" />

        <Button loading={false} type="submit">Buscar</Button>
      </Form>

      <CloseFormButton
        onClick={() => {
          setOpenForm(false);
        }}
      >
        <FiX />
      </CloseFormButton>
    </FormContainer>
  );
}

export default FormComponent;