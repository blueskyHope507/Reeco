import React, { useEffect } from 'react';
import { Container, Wrapper, Text } from './styles';
import { Button, ColorButton } from '../../shared/Button';
interface Props {
  id: string | undefined;
}

const OrderTab: React.FC<Props> = ({ id }) => {
  return (
    <>
      <Container>
        <Wrapper flexDirection="row">
          <Text padding="0 0 0 0">Orders</Text>
          <Text>{'>'}</Text>
          {id && <Text textDecoration="underline">Order {id}</Text>}
        </Wrapper>
      </Container>
      <Container>
        <Wrapper flexDirection="row">
          {id && (
            <Text padding="0 0 0 0" fontSize="30px" fontWeight="bold">
              Order {id}
            </Text>
          )}
        </Wrapper>
        <Wrapper flexDirection="row">
          <Button>Back</Button>
          <ColorButton>Approve Order</ColorButton>
        </Wrapper>
      </Container>
    </>
  );
};

export default OrderTab;
