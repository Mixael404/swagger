import { memo } from "react"
import classes from "./reset.module.css"

function ResetComponent({onClick}){
    return(
        <svg onClick={onClick} className={classes.reset} xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="currentColor">
            <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}

export const Reset = memo(ResetComponent)