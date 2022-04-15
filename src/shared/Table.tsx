import styled from 'styled-components';

export const StyledTable = styled.table`
  border: none;
  border-collapse: collapse;
  color: #a2a2a2;
  thead {
    border: 1px solid #e2e2e2;
    border-radius: 0.78em 0em 0.78em 0em;
  }

  tbody > tr {
    border-bottom: 1px solid #a2a2a2;
  }

  th {
    padding: 0.7em 0.5em 0.2em 0.5em;
    text-align: start;
    font-weight: 400;
  }

  td {
    padding: 1em 0.5em 1em 0.5em;
    text-align: start;
    font-weight: 400;
    background-color: #fbfbfb;
  }

  th: nth-child(2) {
    padding-left: 2em;
  }

  th,
  td: nth-child(1) {
    width: 7%;
  }

  th,
  td: nth-child(2) {
    width: 26%;
  }

  th,
  td: nth-child(3) {
    width: 11%;
  }

  th,
  td: nth-child(4) {
    width: 11%;
  }

  th,
  td: nth-child(5) {
    width: 11%;
  }

  th,
  td: nth-child(6) {
    width: 8%;
  }

  th,
  td: nth-child(7) {
    width: 18%;
  }

  th,
  td: nth-child(8) {
    width: 2%;
  }

  th,
  td: nth-child(9) {
    width: 2%;
  }

  th,
  td: nth-child(10) {
    width: 4%;
  }

  td: nth-child(1) > img {
    width: 100%;
    height: 100%;
    padding: 10%;
  }
`;
