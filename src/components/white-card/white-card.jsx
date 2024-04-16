import { memo } from "react"
import classes from "./white-card.module.css"

function WhiteCardComponent({children, title}){
    return(
        <div className={classes.white_card}>
            <p>{title}</p>
            {children}
        </div>
    )
}

export const WhiteCard = memo(WhiteCardComponent)