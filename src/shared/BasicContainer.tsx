import styled from 'styled-components';

interface ContainerProps {
  justifyContent?: string;
  padding?: string;
  width?: string;
}

export const BasicContainer = styled.div`
  display: flex;
  justify-content: ${(props: ContainerProps) =>
    props.justifyContent ? props.justifyContent : 'space-between'};
  padding: ${(props: ContainerProps) => (props.padding ? props.padding : '0 0 0 0')};
  width: ${(props: ContainerProps) => (props.width ? props.width : '100%')};
`;
