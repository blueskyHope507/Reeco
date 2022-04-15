import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Close } from '@mui/icons-material';
import { changeStatus } from './../../store/orderSlice';
import { AppDispatch } from './../../store';

import { StyledTable } from '../../shared/Table';
import { SearchGroup } from '../../shared/Search';
import { PrintIcon, ClearButton, CheckButton } from '../../shared/Icons';
import { Button, TextButton } from '../../shared/Button';
import { Card, CardHeader, CardBody } from '../../shared/Card';
import { Modal } from '../../shared/Modal';
import {
  Wrapper,
  Container,
  ApproveCheckbox,
  MissingCheckbox,
  MissingUrgentCheckbox,
  MissingModalContainer,
  Text
} from './styles';
import AvocadoHass from '../../assets/Avocado_Hass.jpg';
import { Order, OrderProduct } from './../../@types/order';
import { CM_TOP_CENTER } from '../../@types/constants';

import Dashbar from './../Dashbar';

const tableHeader = ['', 'Product name', 'Brand', 'Price', 'Quantity', 'Total', 'Status'];

interface Props {
  orderData: Order;
  clickEditProduct: (id: number) => void;
  openAddModal: () => void;
}

const OrderTable: React.FC<Props> = ({ orderData, clickEditProduct, openAddModal }) => {
  const dispatch = useDispatch<AppDispatch>();

  const [show, setShow] = useState<boolean>(false);
  const [productIndex, setProductIndex] = useState<number>(0);
  const [tableData, setTableData] = useState<Array<OrderProduct>>([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTableData(orderData?.products);
    setTotal(orderData?.products.reduce((res, item) => res + item.price * item.quantity, 0));
  }, [orderData]);

  const changeStatusOfProduct = (id: string, val: number) => {
    dispatch(
      changeStatus({
        product: {
          id: id,
          status: val
        }
      })
    );
  };

  return (
    <Container>
      <Dashbar
        supplier={orderData.supplier}
        shopping_date={orderData.shopping_date}
        total={total}
      />
      <Card>
        <CardHeader>
          <Wrapper width="38%" flexDirection="row">
            <SearchGroup placeholder="Search..." />
          </Wrapper>
          <Wrapper flexDirection="row">
            <Button onClick={openAddModal}>Add item</Button>
            <PrintIcon cx="0em 0em 0em 2em"></PrintIcon>
          </Wrapper>
        </CardHeader>
        <CardBody>
          <StyledTable>
            <thead>
              <tr>
                {tableHeader.map((item) => (
                  <th>{item}</th>
                ))}
                <th></th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {tableData?.map((row: OrderProduct, index: number) => (
                <tr key={row.id}>
                  <td>
                    <img src={AvocadoHass} alt="Logo" />
                  </td>
                  <td>{row.name}</td>
                  <td>{row.brand}</td>
                  <td>{row.price}</td>
                  <td>{row.quantity}</td>
                  <td>{(row.price * row.quantity).toFixed(1)}</td>
                  {row.status === 0 && <td></td>}
                  {row.status === 1 && (
                    <td>
                      <ApproveCheckbox>Approved</ApproveCheckbox>
                    </td>
                  )}
                  {row.status === 2 && (
                    <td>
                      <MissingCheckbox>Missing</MissingCheckbox>
                    </td>
                  )}
                  {row.status === 3 && (
                    <td>
                      <MissingUrgentCheckbox>Missing-Urgent</MissingUrgentCheckbox>
                    </td>
                  )}
                  <td>
                    <a onClick={() => changeStatusOfProduct(row.id, 1)}>
                      <CheckButton status={row.status === 1 ? 1 : 0} />
                    </a>
                  </td>
                  <td>
                    <a
                      onClick={() => {
                        setShow(true);
                        setProductIndex(index);
                      }}
                    >
                      <ClearButton status={row.status > 1 ? 1 : 0} />
                    </a>
                  </td>
                  <td>
                    <TextButton onClick={() => clickEditProduct(index)}>Edit</TextButton>
                  </td>
                </tr>
              ))}
            </tbody>
          </StyledTable>
        </CardBody>
      </Card>
      {show && tableData && (
        <Modal show={show}>
          <MissingModalContainer openPos={CM_TOP_CENTER}>
            <Wrapper flexDirection="row">
              <Text fontSize="25px" fontWeight="bold" padding="10px 0 0 20px">
                Missing product
              </Text>
              <a onClick={() => setShow(false)}>
                <Close />
              </a>
            </Wrapper>
            <Wrapper>
              <Text fontSize="20px" padding="10px 0 0 20px">
                Is '{tableData[productIndex].name}' urgent?
              </Text>
            </Wrapper>
            <Wrapper flexDirection="row" justifyContent="flex-end">
              <TextButton
                onClick={() => {
                  changeStatusOfProduct(tableData[productIndex].id, 2);
                  setShow(false);
                }}
              >
                <Text fontSize="20px" fontWeight="bold" padding="20px 30px 0 0">
                  No
                </Text>
              </TextButton>
              <TextButton
                onClick={() => {
                  changeStatusOfProduct(tableData[productIndex].id, 3);
                  setShow(false);
                }}
              >
                <Text fontSize="20px" fontWeight="bold" padding="20px 30px 0 0">
                  Yes
                </Text>
              </TextButton>
            </Wrapper>
          </MissingModalContainer>
        </Modal>
      )}
    </Container>
  );
};

export default OrderTable;
