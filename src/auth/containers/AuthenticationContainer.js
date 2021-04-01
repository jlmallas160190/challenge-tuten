/* eslint-disable no-unused-vars */
import FieldWrapper from 'base/ui-components/FieldWrapper';
import GridContainer from 'base/ui-components/GridContainer';
import GridItem from 'base/ui-components/GridItem';
import PropTypes from 'prop-types';
import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import * as yup from 'yup';
import { useForm } from '../../../node_modules/react-hook-form/dist/index';
import { useDispatch } from 'react-redux';
import { authenticate } from 'auth/redux/actions';

const AuthenticationContainer = () => {
  const dispatch = useDispatch();
  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .label('Email')
      .email('Ingresá un email válido')
      .required('Este campo es requerido'),
    password: yup
      .string()
      .min(4, 'Muy corto!')
      .max(16, 'Muy largo!')
      .required('Este campo es requerido'),
  });
  const { handleSubmit, control, setValue, reset, errors } = useForm({
    shouldUnregister: false,
    resolver: yupResolver(validationSchema),
    reValidateMode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (values) => dispatch(authenticate(values));
};
AuthenticationContainer.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default AuthenticationContainer;
