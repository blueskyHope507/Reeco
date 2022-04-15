import './@fake-db';
import React, { useState, useEffect } from 'react';
import { CssBaseline } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { getOrder } from './store/orderSlice';
import { RootState, AppDispatch } from './store';

import Navbar from './components/Navbar';
import OrderTab from './components/OrderTab';
import OrderTable from './components/OrderTable';
import UpdateModal from './components/UpdateModal';
import AddModal from './components/AddModal';
import { CM_TOP_CENTER } from './@types/constants';

import { AppContainer } from './App.style';

const App: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const order = useSelector((state: RootState) => state.orderState.order);

  const [updateShow, setUpdateShow] = useState(false);
  const [productId, setProductId] = useState(0);
  const [addShow, setAddShow] = useState(false);

  useEffect(() => {
    dispatch(getOrder());
  }, [dispatch]);

  const closeUpdateModal = (value: boolean): void => {
    setUpdateShow(value);
  };

  const closeAddModal = (value: boolean): void => {
    setAddShow(value);
  };

  const clickEditProduct = (id: number): void => {
    setProductId(id);
    setUpdateShow(true);
  };

  return (
    <>
      <AppContainer>
        <CssBaseline />
        <Navbar />
        <OrderTab id={order?.id} />
        {order && (
          <OrderTable
            orderData={order}
            clickEditProduct={clickEditProduct}
            openAddModal={() => closeAddModal(true)}
          />
        )}
      </AppContainer>
      {order && (
        <UpdateModal
          show={updateShow}
          openPos={CM_TOP_CENTER}
          product={order.products[productId]}
          onClose={closeUpdateModal}
        />
      )}
      <AddModal show={addShow} onClose={closeAddModal} />
    </>
  );
};

export default App;
