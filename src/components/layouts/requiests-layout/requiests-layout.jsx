import { memo } from "react"
import classes from "./requiests-layout.module.css"

function RequestsLayout({children}){
    return(
        <div className={classes.requests_layout}>
            {children}
        </div>
    )
}

export default memo(RequestsLayout)