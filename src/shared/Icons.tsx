import React from 'react';
import styled from 'styled-components';
import LocalPrintshopOutlinedIcon from '@mui/icons-material/LocalPrintshopOutlined';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import SearchIcon from '@mui/icons-material/Search';

interface PropsIcon {
  className?: string;
  status?: number;
}

const CheckButton: React.FC<PropsIcon> = ({ className, status }) => {
  const iconColor = status === 1 ? 'green' : '#929292';
  return <CheckIcon className={className} sx={{ color: iconColor, cursor: 'pointer' }} />;
};

const ClearButton: React.FC<PropsIcon> = ({ className, status }) => {
  const iconColor = status === 2 ? 'red' : '#929292';
  return <ClearIcon className={className} sx={{ color: iconColor, cursor: 'pointer' }} />;
};

const PrintIcon = styled(LocalPrintshopOutlinedIcon)`
  color: #186239;
  margin: ${(props) => (props.cx ? props.cx : null)};
  font-size: 2em;
  font-size: ${(props) => (props.fontSize ? props.fontSize : '2em')};
`;

export { CheckButton, ClearButton, PrintIcon, SearchIcon };
