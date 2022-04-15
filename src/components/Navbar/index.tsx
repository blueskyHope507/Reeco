import React from 'react';
import { Container, Wrapper, Text } from './styles';
import { ShoppingCart, ArrowDropDown } from '@mui/icons-material';

const Navbar: React.FC = () => {
  return (
    <>
      <Container>
        <Wrapper flexDirection="row">
          <Text fontSize="30px" padding="0 0 0 0">
            Reeco
          </Text>
          <Text>Store</Text>
          <Text>Orders</Text>
          <Text>Analytics</Text>
        </Wrapper>

        <Wrapper flexDirection="row">
          <ShoppingCart />
          <Wrapper flexDirection="row">
            <Text>Hello, James</Text>
            <ArrowDropDown />
          </Wrapper>
        </Wrapper>
      </Container>
    </>
  );
};

export default Navbar;
