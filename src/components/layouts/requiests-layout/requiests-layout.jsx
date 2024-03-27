import { memo } from "react"
import classes from "./requiests-layout.module.css"

function RequiestsLayout({children}){
    return(
        <div className={classes.requiests_layout}>
            {children}
        </div>
    )
}

export default memo(RequiestsLayout)