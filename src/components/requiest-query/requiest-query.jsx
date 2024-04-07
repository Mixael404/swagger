import { useEffect, useRef, useState } from "react"
import classes from "./requiest-query.module.css"

export function RequiestQuery(props){
    const [value, setValue] = useState("")

    const inputRef = useRef(null)
    const action = props.reqControls[props.type]

    const handleChange = (e) => {
        const input = e.target.value
        // setValue(input)
        action(props.name , input)
    }

    useEffect(() => {
        // setValue("")
        inputRef.current.value = ''
    }, [props.clear])

    useEffect(() => {
        inputRef.current.value = props.defaultHeader ?? ''
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
                value={props.defaultHeader ?? undefined}
                onChange={handleChange}
                disabled={!props.access}
                type="text" />
            </div>
        </div>
    )
}
// {name,inputType, description, access, reqControls}