import { memo, useEffect, useRef } from "react"
import classes from "./requiest-query.module.css"
import Select from 'react-select'

function RequestQuery(props){
    const inputRef = useRef(null)
    const selectRef = useRef(null)
    const action = props.reqControls[props.type]

    const optionsExist = props.options && props.options.length
    const defaultSelectedValue = optionsExist && props.options.find(option => option.value === props.defaultValue)

    const handleInputChange = (e) => {
        const input = e.target.value
        const trimmedInput = input.replaceAll(" ", "")
        e.target.value = trimmedInput
        action(props.name , trimmedInput)
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

    }, [props.clear, props.isAccess])


    return(
        <div className={classes.requiest_query}>
            <div className={classes.name_container}>
                <p>{props.name}</p>
                <p>{props.inputType}</p>
            </div>
            <div className={classes.description_container}>
                <p> {props.description} </p>
                {props.options 
                ? 
                <Select
                options={props.options}
                ref={selectRef}
                onChange={handleSelect}
                isDisabled={!props.isAccess || props.disabled}
                />
                : 
                <input
                id={`${props.reqId}-${props.name}`}
                ref={inputRef}
                onChange={handleInputChange}
                disabled={!props.isAccess || props.disabled}
                type="text" />}
            </div>
        </div>
    )
}

export default memo(RequestQuery)
