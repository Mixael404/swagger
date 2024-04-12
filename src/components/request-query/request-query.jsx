import { memo, useEffect, useMemo, useRef, useState } from "react"
import classes from "./requiest-query.module.css"
import Select from 'react-select'

function RequiestQuery(props){
    const inputRef = useRef(null)
    const selectRef = useRef(null)
    const action = props.reqControls[props.type]


    const optionsExist = props.options && props.options.length
    const defaultSelectedValue = optionsExist && props.options.find(option => option.value === props.defaultValue)

    const handleInputChange = (e) => {
        const input = e.target.value
        const trimedInput = input.replaceAll(" ", "")
        console.log(trimedInput);
        e.target.value = trimedInput
        action(props.name , trimedInput)
    }

    const handleSelect = (e) => {
        action(props.name, e.value)
    }

    useEffect(() => {
        if(selectRef.current && defaultSelectedValue){
            selectRef.current.setValue(defaultSelectedValue)
        } else if(selectRef.current){
            selectRef.current.setValue({value: '', title: ''})
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
                ref={selectRef}
                onChange={handleSelect}
                isDisabled={!props.access || props.disabled}
                />
                : <input
                id={`${props.reqId}-${props.name}`}
                ref={inputRef}
                onChange={handleInputChange}
                disabled={!props.access || props.disabled}
                type="text" />}
            </div>
        </div>
    )
}

export default memo(RequiestQuery)
// {name,inputType, description, access, reqControls}