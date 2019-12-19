import React, { Fragment } from "react";
import './Layout.scss'
import Drawer from "../../components/Drawer/Drawer";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Drawer/>
      <main>{children}</main>
    </Fragment>
  );
};

export default Layout;
