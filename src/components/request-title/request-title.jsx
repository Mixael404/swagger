import { memo } from "react"
import classes from "./request-title.module.css"

function RequestTitleComponent({title}){
    return(
        <p className={classes.request_title}> {title} </p>
    )
}

export const RequestTitle = memo(RequestTitleComponent)