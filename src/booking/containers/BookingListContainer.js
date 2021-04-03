import { getBookings } from 'booking/redux/actions';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import TutenTable from 'base/components/TutenTable';

const BookingListContainer = () => {
  const dispatch = useDispatch();
  const [subscribe, setSubscribe] = useState(false);
  useEffect(() => {
    if (!subscribe) {
      dispatch(getBookings({ email: 'contacto@tuten.cl' }));
    }
    return () => {
      setSubscribe(true);
    };
  }, [subscribe, dispatch]);
  const { bookings, loading } = useSelector((state) => state.booking);
  const bookingColumns = [
    { title: 'BookingId', field: 'bookingId' },
    { title: 'Cliente', field: 'firstName' },
    { title: 'Fecha de Creación', field: 'bookingTime' },
  ];

  return (
    <Card>
      <CardHeader title="Listado de Reservaciones" />
      <CardContent>
        <TutenTable columns={bookingColumns} dataPreFetch={bookings} isLoading={loading} paging />
      </CardContent>
    </Card>
  );
};
export default BookingListContainer;
