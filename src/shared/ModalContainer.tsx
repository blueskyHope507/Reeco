import styled from 'styled-components';
import { CM_CENTER_CENTER, CM_TOP_LEFT, CM_TOP_CENTER, CM_TOP_RIGHT } from '../@types/constants';

interface ModalContainerType {
  openPos: string;
}

export const ModalContainer = styled.div`
  position: fixed;
  background: white;
  width: 50%;
  height: auto;

  top: ${({ openPos }: ModalContainerType) =>
    ({
      [CM_CENTER_CENTER]: '50%',
      [CM_TOP_LEFT]: '30%',
      [CM_TOP_CENTER]: '20%',
      [CM_TOP_RIGHT]: '30%'
    }[openPos])};

  left: ${({ openPos }) =>
    ({
      [CM_CENTER_CENTER]: '50%',
      [CM_TOP_LEFT]: '5%',
      [CM_TOP_CENTER]: '50%',
      [CM_TOP_RIGHT]: '95%'
    }[openPos])};

  transform: ${({ openPos }) =>
    ({
      [CM_CENTER_CENTER]: 'translate(-50%,-50%)',
      [CM_TOP_LEFT]: 'translate(0,0)',
      [CM_TOP_CENTER]: 'translate(-50%,0)',
      [CM_TOP_RIGHT]: 'translate(-100%,0)'
    }[openPos])};

  border-radius: 10px;
  padding: 0.75rem;
  color: rgba(0, 0, 139, 0.7);
  min-width: 800px;
`;
