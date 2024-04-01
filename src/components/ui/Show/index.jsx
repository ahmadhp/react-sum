import { ReactNode } from 'react';

const Show = ({ when, children }) => {
  if (when) return children;
  return null;
};

export default Show;
