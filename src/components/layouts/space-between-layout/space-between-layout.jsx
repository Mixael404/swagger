import { memo } from "react"
import classes from "./space-between-layout.module.css"

function SpaceBetweenLayoutComponent({children}){
    return(
        <div className={classes.space_between_layout}>
            {children}
        </div>
    )
}

export const SpaceBetweenLayout = memo(SpaceBetweenLayoutComponent)