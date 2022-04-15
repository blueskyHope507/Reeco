import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProductsToOrder } from '../../store/orderSlice';
import { getFilteredProducts } from './../../store/productsSlice';
import { RootState, AppDispatch } from '../../store';
import { Close } from '@mui/icons-material';
import { Wrapper, TableContent, TableHead, Text } from './styles';
import { Modal } from './../../shared/Modal';
import { StyledHead, StyledContent } from './../../shared/ModalTable';
import { Card, CardHeader, CardBody, CardFooter } from '../../shared/Card';
import { SearchGroup } from '../../shared/Search';
import { Button, ColorButton } from '../../shared/Button';
import { Input } from './../../shared/Input';
import Avocado_Hass from './../../assets/Avocado_Hass.jpg';
import { OrderProduct } from '../../@types/order';

interface Props {
  show: boolean;
  onClose: (value: boolean) => void;
}

const tableHeader = ['', 'Product name', 'Brand', 'Packing', 'Price($)', 'Qt.'];

const AddModal: React.FC<Props> = ({ show, onClose }) => {
  const dispatch = useDispatch<AppDispatch>();
  const products = useSelector((state: RootState) => state.productsState.products);

  const [review, setReview] = useState<boolean>(false);
  const [list, setList] = useState<OrderProduct[]>([]);

  useEffect(() => {
    const o: OrderProduct[] = JSON.parse(JSON.stringify(products));
    o?.forEach((item) => {
      item.quantity = 0;
      item.status = 0;
    });
    if (o) setList(o);
  }, [products]);

  useEffect(() => {
    setReview(false);
  }, [show]);

  const handleSearch = (e: string) => {
    dispatch(getFilteredProducts(e));
  };

  const handleAdd = () => {
    const o = list.filter((item) => item.quantity > 0);
    dispatch(addProductsToOrder({ products: o }));
    onClose(false);
  };

  const handleBack = () => {
    setReview(false);
  };

  const handleReview = () => {
    setReview(true);
  };

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setList(
      list.map((item) => {
        let o = item;
        if (item.id === e.currentTarget.id)
          o = { ...o, [e.currentTarget.name]: Number(e.currentTarget.value) };
        return o;
      })
    );
  };

  const getShowList = () => {
    let showList: OrderProduct[] = JSON.parse(JSON.stringify(list));
    if (review === true) showList = list.filter((item) => item.quantity > 0);

    return (
      <>
        {showList.map((row) => (
          <tr key={row.id}>
            <td>
              <img src={Avocado_Hass} alt="Logo" />
            </td>
            <td>{row.name}</td>
            <td>{row.brand}</td>
            <td>10/32 OZ</td>
            <td>
              <Input id={row.id} name="price" value={row.price} onChange={handleChange} />
            </td>
            <td>
              <Input id={row.id} name="quantity" value={row.quantity} onChange={handleChange} />
            </td>
          </tr>
        ))}
      </>
    );
  };

  return (
    <Modal show={show}>
      <Card marginTop="5%">
        <Wrapper flexDirection="row">
          <Text fontWeight="bold" fontSize="25px" padding="20px 0 0 20px">
            Add Products from Sysco's catalog
          </Text>
          <a onClick={() => onClose(false)}>
            <Close />
          </a>
        </Wrapper>
        <hr />
        <Wrapper alignItems="flex-start">
          {review ? (
            <Text fontSize="20px">Review before adding products</Text>
          ) : (
            <Text fontSize="20px">Search products from Sysco's catalog and add quantity</Text>
          )}
        </Wrapper>
        <CardHeader>
          <Wrapper width="38%" flexDirection="row">
            <SearchGroup placeholder="Search..." onSearch={handleSearch}></SearchGroup>
          </Wrapper>
        </CardHeader>
        <CardBody>
          {list.length ? (
            <>
              <TableHead>
                <StyledHead>
                  <thead>
                    <tr>
                      {tableHeader.map((item) => (
                        <th>{item}</th>
                      ))}
                    </tr>
                  </thead>
                </StyledHead>
              </TableHead>
              <TableContent>
                <StyledContent>
                  <tbody>{getShowList()}</tbody>
                </StyledContent>
              </TableContent>
            </>
          ) : (
            <Wrapper>
              <img src={Avocado_Hass} alt="Logo" />
            </Wrapper>
          )}
        </CardBody>
        <CardFooter>
          <Wrapper flexDirection="row">
            <Text color="#186239" fontWeight="bold" fontSize="25px">
              Total:
            </Text>
            <Text color="#186239" fontSize="20px">
              {products ? products.length : 0} product
            </Text>
          </Wrapper>
          {review ? (
            <Wrapper flexDirection="row">
              <Button onClick={handleBack}>Back</Button>
              <ColorButton onClick={handleAdd}>Add</ColorButton>
            </Wrapper>
          ) : (
            <Wrapper>
              <ColorButton onClick={handleReview}>Review</ColorButton>
            </Wrapper>
          )}
        </CardFooter>
      </Card>
    </Modal>
  );
};

export default AddModal;
