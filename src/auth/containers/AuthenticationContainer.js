import { yupResolver } from '@hookform/resolvers/yup';
import { TextField, withStyles } from '@material-ui/core';
import { authenticate } from 'auth/redux/actions';
import { LoadingStyled } from 'base/ui-components/loadingStyled';
import PropTypes from 'prop-types';
import React from 'react';
import { Controller, useForm } from 'react-hook-form/dist/index';
import { useDispatch, useSelector } from 'react-redux';
import { Alert } from '@material-ui/lab';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';

import * as yup from 'yup';

const styles = {
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};
const AuthenticationContainer = (props) => {
  const { classes } = props;
  const dispatch = useDispatch();
  const validationSchema = yup.object().shape({
    email: yup.string().email().label('Email').required('Este campo es requerido'),
    password: yup
      .string()
      .min(4, 'Muy corto!')
      .max(16, 'Muy largo!')
      .required('Este campo es requerido'),
  });
  const authenticating = useSelector((state) => state.authentication.authenticating);
  const { handleSubmit, control, errors } = useForm({
    shouldUnregister: false,
    resolver: yupResolver(validationSchema),
    reValidateMode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (values) => dispatch(authenticate(values));
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Card className={classes.card}>
        <CardHeader title="Tuten" subheader="Auténticación" />
        <CardContent>
          <Controller name="email" label="Correo" type="email" control={control} as={TextField} />
          {errors.email && <Alert severity="error">{errors.email.message}</Alert>}
          <Controller
            name="password"
            label="Contraseña"
            type="password"
            control={control}
            as={TextField}
          />
          {errors.password && <Alert severity="error">{errors.password.message}</Alert>}
        </CardContent>
        <CardActions>
          <Box display="flex" justifyContent="flex-end" mt={3}>
            <Box position="relative" mr={1}>
              <Button variant="contained" color="primary" disabled={authenticating} type="submit">
                Guardar
              </Button>
              {authenticating && <LoadingStyled size={24} />}
            </Box>
          </Box>
        </CardActions>
      </Card>
    </form>
  );
};
AuthenticationContainer.propTypes = {
  classes: PropTypes.shape().isRequired,
};

export default withStyles(styles)(AuthenticationContainer);
