import { useEffect, useRef, useState } from "react"
import classes from "./requiest-query.module.css"

export function RequiestQuery(props){
    const [value, setValue] = useState("")

    const inputRef = useRef(null)
    const action = props.reqControls[props.type]

    const handleChange = (e) => {
        const input = e.target.value
        action(props.name , input)
    }

    useEffect(() => {
        // setValue("")
        inputRef.current.value = props.defaultValue ?? ''
    }, [props.clear])

    useEffect(() => {
        inputRef.current.value = props.defaultValue ?? ''
    }, [props.access])

    return(
        <div className={classes.requiest_query}>
            <div className={classes.name_container}>
                <p>{props.name}</p>
                <p>{props.inputType}</p>
            </div>
            <div className={classes.description_container}>
                <p> {props.description} </p>
                <input
                id={`${props.reqId}-${props.name}`}
                ref={inputRef}
                onChange={handleChange}
                disabled={!props.access || !props.editable}
                type="text" />
            </div>
        </div>
    )
}
// {name,inputType, description, access, reqControls}