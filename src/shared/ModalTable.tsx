import styled from 'styled-components';

export const StyledHead = styled.table`
  border: none;
  border-collapse: collapse;
  color: #a2a2a2;
  width: 100%;
  tbody > tr {
    border-bottom: 1px solid #a2a2a2;
    padding: 0em 0em 0em 0em;
  }

  th {
    padding: 0.7em 0.5em 0.2em 0.5em;
    text-align: start;
    font-weight: 400;
  }

  th: nth-child(2) {
    padding-left: 2em;
  }

  th: nth-child(1) {
    width: 10%;
  }

  th: nth-child(2) {
    width: 30%;
  }

  th: nth-child(3) {
    width: 20%;
  }

  th: nth-child(4) {
    width: 15%;
  }

  th: nth-child(5) {
    width: 15%;
  }

  th: nth-child(6) {
    width: 10%;
  }

  td: nth-child(1) > img {
    width: 80%;
    height: 80%;
    padding: 10%;
  }
`;

export const StyledContent = styled.table`
  border: 1px solid #e2e2e2;
  border-collapse: collapse;
  color: #a2a2a2;
  width: 100%;
  tbody > tr {
    border-bottom: 1px solid #a2a2a2;
    padding: 0em 0em 0em 0em;
  }

  th {
    padding: 0.7em 0.5em 0.2em 0.5em;
    text-align: start;
    font-weight: 400;
  }

  td {
    padding: 0em 0.5em 0em 0.5em;
    text-align: start;
    font-weight: 400;
    background-color: #fbfbfb;
  }

  td: nth-child(1) {
    width: 10%;
  }

  td: nth-child(2) {
    width: 30%;
  }

  td: nth-child(3) {
    width: 20%;
  }

  td: nth-child(4) {
    width: 15%;
  }

  td: nth-child(5) {
    width: 15%;
  }

  td: nth-child(6) {
    width: 10%;
  }

  td: nth-child(1) > img {
    width: 80%;
    height: 80%;
    padding: 10%;
  }
`;
