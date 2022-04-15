import styled from 'styled-components';

export const Button = styled.button`
  padding: 10px 20px 10px 20px;
  margin-left: 20px;
  border: 1px solid #186239;
  border-radius: 30px;
  color: green;
  font-weight: 900;
  &:hover {
    background-color: #e9d5d5;
  }
  &:active {
    background-color: #e6b4b4;
  }
`;

export const ColorButton = styled(Button)`
  background-color: #186239;
  color: white;
`;

interface Props {
  marginRight?: number;
}
export const TextButton = styled.p`
  cursor: pointer;
  margin-right: ${(props: Props) => (props.marginRight ? props.marginRight : '5px')};
`;
