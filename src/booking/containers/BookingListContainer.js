import { FontAwesomeIcon } from '@fortawesome/react-fontawesome/index';
import { yupResolver } from '@hookform/resolvers/yup';
import { getBookings } from 'booking/redux/actions';
import React from 'react';
import { Controller, useForm } from 'react-hook-form/dist';
import { useDispatch, useSelector } from 'react-redux';

import { TextField } from '@material-ui/core';
import { DataGrid } from '@material-ui/data-grid';
import { Alert } from '@material-ui/lab';

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';

import GridContainer from 'base/ui-components/GridContainer';
import GridItem from 'base/ui-components/GridItem';
import StyledFlex from 'base/ui-components/StyledFlex';
import { LoadingStyled } from 'base/ui-components/loadingStyled';

import * as yup from 'yup';
import { faSync } from '@fortawesome/free-solid-svg-icons/index';
import { formatToDate } from 'base/utils/helpers';

const BookingListContainer = () => {
  const dispatch = useDispatch();
  const validationSchema = yup.object().shape({
    email: yup.string().email().label('Email').required('Este campo es requerido'),
  });
  const { handleSubmit, control, errors } = useForm({
    shouldUnregister: false,
    resolver: yupResolver(validationSchema),
    reValidateMode: 'onChange',
    defaultValues: {
      email: '',
    },
  });
  const { bookings, loading } = useSelector((state) => state.booking);
  const bookingColumns = [
    { headerName: 'BookingId', field: 'bookingId', width: 150 },
    {
      headerName: 'Cliente',
      field: 'tutenUserClient',
      width: 250,
      valueFormatter: ({ value }) => `${value.firstName} ${value.lastName}`,
    },
    {
      headerName: 'Fecha de Creación',
      field: 'bookingTime',
      width: 200,
      type: 'date',
      valueFormatter: ({ value }) => formatToDate(value),
    },
    {
      headerName: 'Dirección',
      field: 'locationId',
      width: 400,
      valueFormatter: ({ value }) => value.streetAddress,
    },
    { headerName: 'Precio', field: 'bookingPrice', width: 150, type: 'number' },
  ];
  const onSubmit = (values) => dispatch(getBookings(values));
  return (
    <Card>
      <CardHeader title="Listado de Reservaciones" />
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <GridContainer>
            <GridItem xs={12} md={12}>
              <StyledFlex
                direction="row"
                align="center"
                justifyContent="space-between"
                margin="1rem"
              >
                <Box display="flex" justifyContent="flex-start">
                  <Controller
                    name="email"
                    label="Correo"
                    type="email"
                    control={control}
                    as={TextField}
                  />
                  {errors.email && <Alert severity="error">{errors.email.message}</Alert>}
                </Box>
                <Box display="flex" justifyContent="flex-end">
                  <Box position="relative" mr={2}>
                    <Button variant="contained" color="primary" disabled={loading} type="submit">
                      <FontAwesomeIcon icon={faSync} />
                      Consultar
                    </Button>
                    {loading && <LoadingStyled size={24} />}
                  </Box>
                </Box>
              </StyledFlex>
            </GridItem>
            <GridItem xs={12} md={12}>
              <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                  rows={bookings.map((item) => ({ ...item, id: item.bookingId }))}
                  columns={bookingColumns}
                  loading={loading}
                />
              </div>
            </GridItem>
          </GridContainer>
        </form>
      </CardContent>
    </Card>
  );
};
export default BookingListContainer;
