import React from "react";
import './Layout.scss';

interface LayoutProps {
  children?: JSX.Element | JSX.Element[];
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <div className="layout">{children}</div>;
};
