import { memo } from "react";
import Header from "../../header/header";
import classes from "./layout.module.css";

function Layout({ children }) {
  return (
    <>
      <div className={`${classes.Layout} container`}>
        {children}
      </div>
    </>
  );
}

export default memo(Layout)