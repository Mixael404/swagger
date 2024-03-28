import { memo } from "react"
import classes from "./params-title.module.css"

function ParamsTitleComponent(){
    return(
        <div className={classes.params_title}>
            <p>Name</p>
            <p>Description</p>
        </div>
    )
}

export const ParamsTitle = memo(ParamsTitleComponent)