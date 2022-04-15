import styled from 'styled-components';

interface ModalType {
  show: boolean;
}

export const Modal = styled.div`
  z-index: 20;
  display: ${({ show }: ModalType) => (show ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.5);
`;
