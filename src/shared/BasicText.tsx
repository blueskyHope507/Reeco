import styled from 'styled-components';
import { PageText } from './PageText';

export const BasicText = styled(PageText)`
  color: ${(props) => (props.color ? props.color : '#000000')};
  font-size: ${(props) => (props.fontSize ? props.fontSize : '.9em')};
  padding: ${(props) => (props.padding ? props.padding : '0 0 0 0')};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : '')};
`;
