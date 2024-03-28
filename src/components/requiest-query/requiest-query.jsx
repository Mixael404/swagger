import { useRef, useState } from "react"
import classes from "./requiest-query.module.css"

export function RequiestQuery(props){
    const [value, setValue] = useState("")
    const action = props.reqControls[props.type]
    const handleChange = (e) => {
        if(e.target.value === " "){
            return
        }
        action(e.target.value)
    }
    return(
        <div className={classes.requiest_query}>
            <div className={classes.name_container}>
                <p>{props.name}</p>
                <p>{props.inputType}</p>
            </div>
            <div className={classes.description_container}>
                <p> {props.description} </p>
                <input
                onChange={handleChange}
                disabled={!props.access}
                type="text" />
            </div>
        </div>
    )
}
// {name,inputType, description, access, reqControls}