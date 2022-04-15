import React from 'react';

interface Props {
  className?: string;
  display?: string;
  flexDirection?: string;
  alignItems?: string;
  justifyContent?: string;
  maxWidth?: string;
  margin?: string;
  width?: string;
  height?: string;
}

export const PageItemWrapper: React.FC<Props> = ({ className, children }) => {
  return <div className={className}>{children}</div>;
};
