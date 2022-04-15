import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Modal } from './../../shared/Modal';
import { ModalContainer } from './../../shared/ModalContainer';
import { Text, Container, Wrapper, Image, ButtonCircle, Input, StyledCheckbox } from './styles';
import { Close } from '@mui/icons-material';
import { Button, ColorButton } from '../../shared/Button';
import { OrderProduct } from './../../@types/order';
import { AppDispatch } from './../../store';
import { updateProduct } from './../../store/orderSlice';
import Avocado_Hass from './../../assets/Avocado_Hass.jpg';

const optionStrings = [
  'Missing Product',
  'Quantity is not the same',
  'Price is not the same',
  'Other'
];

interface Props {
  show: boolean;
  openPos: string;
  product: OrderProduct;
  onClose: (value: boolean) => void;
}

const UpdateModal: React.FC<Props> = ({ show, openPos, product, onClose }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { id, name, brand, price, quantity, status } = product;

  const [priceVal, setPriceVal] = useState(0);
  const [quantityVal, setQuantityVal] = useState(0);
  const [checkStates, setCheckStates] = useState([false, false, false, false]);

  useEffect(() => {
    setQuantityVal(quantity);
    setPriceVal(price);
  }, [quantity, price]);

  const sendYes = () => {
    dispatch(
      updateProduct({
        product: {
          id: id,
          name: name,
          brand: brand,
          price: priceVal,
          quantity: quantityVal,
          status: status
        }
      })
    );
    onClose(false);
  };

  const sendNo = () => onClose(false);

  const changeCheckState = (index: number) => {
    setCheckStates([
      ...checkStates.slice(0, index),
      !checkStates[index],
      ...checkStates.slice(index + 1, 4)
    ]);
  };

  return (
    <Modal show={show}>
      <ModalContainer openPos={openPos}>
        <Container padding="10px 0 0 20px">
          <Wrapper>
            <Text fontWeight="bold" fontSize="25px" padding="20px 0 0 0">
              {name}
            </Text>
            <Text fontSize="20px" padding="5px 0 0 0">
              {brand}
            </Text>
          </Wrapper>
          <Wrapper>
            <a onClick={sendNo}>
              <Close />
            </a>
          </Wrapper>
        </Container>
        <Container padding="5px 20% 0 5%">
          <Container width="30%">
            <Image src={Avocado_Hass} />
          </Container>
          <Container width="20%">
            <Wrapper justifyContent="space-around">
              <Text>Price ($)</Text>
              <Text>Quantity</Text>
              <Text>Total</Text>
            </Wrapper>
          </Container>
          <Container width="30%">
            <Wrapper justifyContent="center">
              <ButtonCircle
                onClick={() => {
                  if (quantityVal >= 1) setQuantityVal(quantityVal - 1);
                }}
              >
                -
              </ButtonCircle>
            </Wrapper>
            <Container>
              <Wrapper alignItems="center" justifyContent="space-around">
                <Input
                  value={priceVal}
                  onChange={(e) => {
                    if (!isNaN(Number(e.target?.value))) {
                      setPriceVal(Number(e.target?.value));
                    }
                  }}
                />
                <Input
                  value={quantityVal}
                  onChange={(e) => {
                    if (!isNaN(Number(e.target?.value))) {
                      setQuantityVal(Number(e.target?.value));
                    }
                  }}
                />
                <Input value={'$' + (priceVal * quantityVal).toFixed(1)} disabled />
              </Wrapper>
            </Container>
            <Wrapper justifyContent="center">
              <ButtonCircle onClick={() => setQuantityVal(quantityVal + 1)}>+</ButtonCircle>
            </Wrapper>
          </Container>
          <Wrapper alignItems="center" justifyContent="space-around">
            <Text>/ 6 * 1LB</Text>
            <Text>X 6 * 1LB</Text>
            <Text color="white">3</Text>
          </Wrapper>
        </Container>
        <Container padding="10px 0 0 20px">
          <Wrapper flexDirection="row" justifyContent="flex-start">
            <Text fontWeight="bold">Choose reason </Text>
            <Text color="gray"> &nbsp;(Optional)</Text>
          </Wrapper>
        </Container>
        <Container padding="10px 0 0 20px">
          <Wrapper flexDirection="row" justifyContent="flex-start">
            {optionStrings.map((str, index) => (
              <StyledCheckbox
                key={index}
                checked={checkStates[index]}
                onClick={() => changeCheckState(index)}
              >
                {str}
              </StyledCheckbox>
            ))}
          </Wrapper>
        </Container>
        <Container padding="20px 50px 10px 0" justifyContent="flex-end">
          <Button onClick={sendNo}>Cancel</Button>
          <ColorButton onClick={sendYes}>Send</ColorButton>
        </Container>
      </ModalContainer>
    </Modal>
  );
};

export default UpdateModal;
