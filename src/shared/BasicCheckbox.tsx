import styled from 'styled-components';

export const BasicCheckbox = styled.button`
  display: inline-block;
  border: 1px solid #535e4f;
  border-radius: 30px;
  color: ${(props: { checked?: boolean }) => (props.checked ? 'white' : 'black')};
  background: ${(props: { checked?: boolean }) => (props.checked ? '#186239' : 'white')};
  transition: all 150ms;
`;
