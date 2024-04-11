import { memo, useEffect, useRef, useState } from "react"
import classes from "./requiest-query.module.css"
import Select from 'react-select'

function RequiestQuery(props){
    const inputRef = useRef(null)
    const action = props.reqControls[props.type]

    const defaultSelectedValue = (props.options && props.options.length) && props.options.find(option => option.value === props.defaultValue)
    const handleChange = (e) => {
        const input = e.target.value
        action(props.name , input)
    }

    const handleSelect = (e) => {
        action(props.name, e.value)
    }

    useEffect(() => {
        if(inputRef.current.setValue && defaultSelectedValue){
            inputRef.current.setValue(defaultSelectedValue)
        } else if(inputRef.current.setValue){
            inputRef.current.setValue({value: '', title: ''})
        } else {
            inputRef.current.value = props.defaultValue ?? ''
        }

    }, [props.clear, props.access])


    return(
        <div className={classes.requiest_query}>
            <div className={classes.name_container}>
                <p>{props.name}</p>
                <p>{props.inputType}</p>
            </div>
            <div className={classes.description_container}>
                <p> {props.description} </p>
                {props.options ? 
                <Select
                options={props.options}
                ref={inputRef}
                onChange={handleSelect}
                isDisabled={!props.access || props.disabled}
                />
                : <input
                id={`${props.reqId}-${props.name}`}
                ref={inputRef}
                onChange={handleChange}
                disabled={!props.access || props.disabled}
                type="text" />}
            </div>
        </div>
    )
}

export default memo(RequiestQuery)
// {name,inputType, description, access, reqControls}