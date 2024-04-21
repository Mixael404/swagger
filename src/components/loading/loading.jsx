import { memo } from "react";
import classes from "./loading.module.css";
import spinner from "./loading.gif"

function LoadingComponent({ children, isLoading }) {
  return (
    <div className={classes.loading}>
      <div className={isLoading ? `${classes.loader}` : `${classes.loader} ${classes.hidden}`}>
        <img className={classes.spinner} src={spinner} alt="" />
      </div>
      {children}
    </div>
  );
}

export const Loading = memo(LoadingComponent);
