import styled from 'styled-components';

export const Card = styled.div`
  border: 1px solid #e2e2e2;
  border-radius: 10px;
  background-color: white;
  padding: 0.78em;
  width: 80%;
  margin-bottom: 20px;
  margin-left: 10%;
  margin-right: 10%;
  margin-top: ${(props: { marginTop?: string }) => (props.marginTop ? props.marginTop : '')};
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  color: black;
  background-color: white;
  padding: 1.2em 1.5em 1em 1.5em;
  width: 100%;
`;

export const CardBody = styled.div`
  padding: 0.2em 1.5em 0.2em 1.5em;
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: black;
  background-color: white;
  padding: 1.2em 1.5em 1em 1.5em;
  width: 100%;
`;
