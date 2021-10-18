import React from "react";
import NavBar from "../NavBar/Nav/Nav";
import classes from "./Layout.module.css";
const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <main className={classes.main}>
        <div className={classes.container}>{children}</div>
      </main>
    </>
  );
};

export default Layout;
