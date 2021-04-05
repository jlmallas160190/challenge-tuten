import { yupResolver } from '@hookform/resolvers/yup';
import { authenticateStart } from 'auth/redux/actions';
import PropTypes from 'prop-types';
import React from 'react';
import { Controller, useForm } from 'react-hook-form/dist';
import { useDispatch, useSelector } from 'react-redux';

import { TextField, withStyles } from '@material-ui/core';
import { Alert } from '@material-ui/lab';

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';

import GridContainer from 'base/ui-components/GridContainer';
import GridItem from 'base/ui-components/GridItem';
import { LoadingStyled } from 'base/ui-components/loadingStyled';

import * as yup from 'yup';
import { faKey } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { style } from 'auth/styles/index';

const styles = () => style;
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
  const { authenticating } = useSelector((state) => state.authentication);
  const { handleSubmit, control, errors } = useForm({
    shouldUnregister: false,
    resolver: yupResolver(validationSchema),
    reValidateMode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (values) => dispatch(authenticateStart(values));
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Card className={classes.card}>
        <CardHeader id="header" title="Tuten" subheader="Auténticación" />
        <CardContent>
          <GridContainer>
            <GridItem xs={12} md={12}>
              <Controller
                id="email"
                name="email"
                label="Correo"
                type="email"
                control={control}
                as={<TextField className={classes.textField} />}
              />
              {errors.email && <Alert severity="error">{errors.email.message}</Alert>}
            </GridItem>
            <GridItem xs={12} md={12}>
              <Controller
                id="password"
                name="password"
                label="Contraseña"
                type="password"
                control={control}
                as={<TextField className={classes.textField} />}
              />
              {errors.password && <Alert severity="error">{errors.password.message}</Alert>}
            </GridItem>
          </GridContainer>
        </CardContent>
        <CardActions>
          <Box display="flex" justifyContent="flex-end" mt={3}>
            <Box position="relative" mr={1}>
              <Button
                id="authenticate"
                variant="contained"
                color="primary"
                disabled={authenticating}
                type="submit"
              >
                <FontAwesomeIcon icon={faKey} />
                Autenticar
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
