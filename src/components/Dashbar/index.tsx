import React from 'react';
import { Card } from '../../shared/Card';
import { Container } from './styles';
import DashItem from './../../shared/DashItem';
import {
  AcUnit,
  Accessibility,
  AccountTree,
  AdUnits,
  Adb,
  AddAPhoto,
  AddAlarm,
  AddAlert
} from '@mui/icons-material';

interface Props {
  supplier?: string;
  shopping_date?: string;
  total: number;
}

const Dashbar: React.FC<Props> = ({ supplier, shopping_date, total }) => {
  return (
    <>
      <Card>
        <Container>
          <DashItem title="Supplier">
            <p>{supplier}</p>
          </DashItem>
          <DashItem title="Shipping data">
            <p>{shopping_date}</p>
          </DashItem>
          <DashItem title="Total">
            <p>$ {total}</p>
          </DashItem>
          <DashItem title="category">
            <p>
              <AcUnit />
              &nbsp;&nbsp;&nbsp;
              <Accessibility />
              &nbsp;&nbsp;&nbsp;
              <AccountTree />
              &nbsp;&nbsp;&nbsp;
              <AdUnits />
              &nbsp;&nbsp;&nbsp;
            </p>
            <p>
              <Adb />
              &nbsp;&nbsp;&nbsp;
              <AddAPhoto />
              &nbsp;&nbsp;&nbsp;
              <AddAlarm />
              &nbsp;&nbsp;&nbsp;
              <AddAlert />
              &nbsp;&nbsp;&nbsp;
            </p>
          </DashItem>
          <DashItem title="Department">
            <p>300-444-678</p>
          </DashItem>
          <DashItem title="Status" noBorder={true}>
            <p>Awaiting your approvel</p>
          </DashItem>
        </Container>
      </Card>
    </>
  );
};

export default Dashbar;
