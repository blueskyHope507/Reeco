import styled from 'styled-components';
import { BasicText } from './../../shared/BasicText';
import { BasicContainer } from '../../shared/BasicContainer';
import { BasicWrapper } from './../../shared/BasicWrapper';

export const Text = styled(BasicText)`
  color: ${(props) => (props.color ? props.color : '#ffffff')};
  padding: ${(props) => (props.padding ? props.padding : '0 0 0 60px')};
`;

export const Container = styled(BasicContainer)`
  color: white;
  background-color: #186239;
  padding: 0 8% 0 8%;
`;

export const Wrapper = styled(BasicWrapper)`
  align-items: center;
`;
