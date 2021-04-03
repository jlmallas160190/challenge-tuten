import { getBookings } from 'booking/redux/actions';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';

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

  return (
    <Card>
      <CardHeader title="Listado de Reservaciones" />
      <CardContent />
    </Card>
  );
};
export default BookingListContainer;
