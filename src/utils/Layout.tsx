import React from "react";

interface LayoutProps {
  children?: JSX.Element | JSX.Element[];
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <div style={{ padding: "5rem 20rem" }}>{children}</div>;
};
