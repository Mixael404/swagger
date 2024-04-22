import { memo } from "react"
import classes from "./query-name.module.css"

function QueryNameComponent(props){
    return(
        <div className={classes.name_container}>
        <p>
          {props.name}{" "}
          {props.required ? <span className={classes.required}> *</span> : null}
        </p>
        <p>{props.inputType}</p>
      </div>
    )
}

export const QueryName = memo(QueryNameComponent)