import { memo } from "react"
import classes from "./params-control-btn.module.css"

function ParamsControlBtnComponent({access, setAccess}){
    return(
        <button
              onClick={() => setAccess((prev) => !prev)}
              className={classes.params_control_btn}
            >
              {access ? "Cancel" : "Try it out"}
        </button>
    )
}

export const ParamsControlBtn = memo(ParamsControlBtnComponent)