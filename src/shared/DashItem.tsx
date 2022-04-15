import React from 'react';
import styled from 'styled-components';
import { BasicText } from './BasicText';

const Content = styled.div`
  font-weight: bolder;
  font-size: 1.28em;
  color: #222222;
`;

const ItemView = styled.div`
  width: 15%;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border-right: ${(props: { noBorder?: boolean }) => (props.noBorder ? '' : '2px solid #e2e2e2')};
`;

interface Props {
  title?: string;
  noBorder?: boolean;
}

const DashItem: React.FC<Props> = ({ title, noBorder, children }) => {
  return (
    <ItemView noBorder={noBorder}>
      <BasicText fontSize="15px">{title}</BasicText>
      <Content>{children}</Content>
    </ItemView>
  );
};

export default DashItem;
