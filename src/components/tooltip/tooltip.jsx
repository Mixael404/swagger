import { memo } from "react";
import classes from "./tooltip.module.css";
import { Tooltip as TooltipController } from "react-tooltip";

function TooltipComponent({text}) {
  return (
    <>
      <img width={30} height={30} data-tooltip-id="my-tooltip"  className={classes.tooltip} src="https://cdn-icons-png.flaticon.com/512/25/25333.png" alt="?" />
      
      <TooltipController
      style={{ whiteSpace: 'break-all', maxWidth: '100%' }}
      id="my-tooltip"
      content={text}
      place="left-start"
      />
    </>
  );
}

export const Tooltip = memo(TooltipComponent);
