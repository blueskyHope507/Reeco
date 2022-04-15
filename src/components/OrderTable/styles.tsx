import styled from 'styled-components';
import { BasicText } from '../../shared/BasicText';
import { BasicWrapper } from '../../shared/BasicWrapper';
import { BasicContainer } from '../../shared/BasicContainer';
import { BasicCheckbox } from '../../shared/BasicCheckbox';
import { ModalContainer } from '../../shared/ModalContainer';

export const Text = styled(BasicText)``;

export const Wrapper = styled(BasicWrapper)`
  align-items: ${(props) => (props.alignItems ? props.alignItems : 'center')};
  width: ${(props) => (props.width ? props.width : null)};
`;

export const Container = styled(BasicContainer)`
  display: block;
  padding-top: 60px;
  padding-bottom: 50px;
  color: black;
  background-color: #f8f4f4;
  overflow: auto;
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

export const ApproveCheckbox = styled(BasicCheckbox)`
  padding: 10px 20px 10px 20px;
  background-color: #53ed87;
  color: #ffffff;
  border: none;
`;

export const MissingCheckbox = styled(BasicCheckbox)`
  padding: 10px 20px 10px 20px;
  background-color: #b83535;
  color: #ffffff;
  border: none;
  background-color: #ff6941;
`;

export const MissingUrgentCheckbox = styled(BasicCheckbox)`
  padding: 10px 20px 10px 20px;
  background-color: red;
  color: #ffffff;
  border: none;
  background-color: #fd3135;
`;

export const MissingModalContainer = styled(ModalContainer)`
  width: 30%;
  min-width: 300px;
`;
