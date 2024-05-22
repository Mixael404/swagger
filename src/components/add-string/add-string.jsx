import { memo } from "react"
import classes from "./add-string.module.css"

function AddStringComponent({onClick}){
    return(
        <p 
        onClick={onClick}
        className={classes.add_string}>Add request</p>
    )
}

export const AddString = memo(AddStringComponent)