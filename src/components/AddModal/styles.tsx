import styled from 'styled-components';
import { BasicText } from './../../shared/BasicText';
import { BasicWrapper } from '../../shared/BasicWrapper';

export const Text = styled(BasicText)`
  padding: ${(props) => (props.padding ? props.padding : '0 0 0 20px')};
  text-decoration: ${(props) => (props.textDecoration ? props.textDecoration : 'null')};
`;

export const Wrapper = styled(BasicWrapper)`
  align-items: ${(props) => (props.alignItems ? props.alignItems : 'center')};
  width: ${(props) => (props.width ? props.width : null)};
`;

export const TableContent = styled.div`
  overflow-y: auto;
  height: 50vh;
  margin-top: 0.6em;
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-track {
    background: #ffffffff;
  }
  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 5px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export const TableHead = styled.div`
  border: 1px solid #e2e2e2;
  border-radius: 1em 1em 0em 0em;
`;
