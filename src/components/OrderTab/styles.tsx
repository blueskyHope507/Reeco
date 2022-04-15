import styled from 'styled-components';
import { BasicText } from '../../shared/BasicText';
import { BasicContainer } from '../../shared/BasicContainer';
import { BasicWrapper } from '../../shared/BasicWrapper';

export const Text = styled(BasicText)`
  padding: ${(props) => (props.padding ? props.padding : '0 0 0 20px')};
  text-decoration: ${(props) => (props.textDecoration ? props.textDecoration : 'null')};
`;

export const Container = styled(BasicContainer)`
  color: black;
  background-color: white;
  padding: 0.5% 8% 0.5% 8%;
  box-shadow: 5px 5px 5px lightblue;
  z-index: 10;
`;

export const Wrapper = styled(BasicWrapper)`
  align-items: center;
`;
