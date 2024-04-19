import { memo } from "react";
import classes from "./loading.module.css";

function LoadingComponent({ children, isLoading }) {
  return (
    <div className={classes.loading}>
      <div className={isLoading ? `${classes.loader}` : `${classes.loader} ${classes.hidden}`}>
        {/* <img className={classes.spinner} src="./loading.gif" alt="" /> */}
        <p className={classes.spinner}>Loading...</p>
      </div>
      {children}
    </div>
  );
}

export const Loading = memo(LoadingComponent);
