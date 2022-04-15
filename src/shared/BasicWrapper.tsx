import styled from 'styled-components';
import { PageItemWrapper } from './ItemWrapper';

export const BasicWrapper = styled(PageItemWrapper)`
  display: flex;
  justify-content: ${(props) => (props.justifyContent ? props.justifyContent : 'space-between')};
  flex-direction: ${(props) => (props.flexDirection ? props.flexDirection : 'column')};
  align-items: ${(props) => (props.alignItems ? props.alignItems : 'flex-start')};
  cursor: pointer;
`;
