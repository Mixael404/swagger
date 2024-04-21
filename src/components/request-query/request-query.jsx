import { memo, useEffect, useRef, useState } from "react"
import classes from "./requiest-query.module.css"
import Select from 'react-select'
import { validationService } from "../../services/validation.service"
import { Reset } from "../reset/reset"

function RequestQuery(props){
    const [error, setError] = useState(null)
    const [reset, setReset] = useState(false)
    const inputRef = useRef(null)
    const selectRef = useRef(null)
    // Костыль, чтобы задавать стили попроще и менять и валидировать значение не через стейт компонента Select
    const selectWrapperRef = useRef(null)
    const action = props.reqControls[props.type]

    const optionsExist = props.options && props.options.length
    const defaultSelectedValue = optionsExist && props.options.find(option => option.value === props.defaultValue)

    const validation = (toTest) => {
        let value
        if(!toTest){
            value = selectRef.current ? selectWrapperRef.value : inputRef.current.value
        } else{
            value = toTest
        }
        let result = true

        if(props.inputType === 'number'){
            result = validationService.isOnlyNumbers(value, true)
            if(!result) setError("This value can contain only numbers!")
        }
        if(props.required){
            result = validationService.isNotEmpty(value)
            if(!result) setError("This value can not be empty!")
        }

        if(!result){
            if(inputRef.current){
                inputRef.current.classList.add(classes.invalid)
            } else{
                selectWrapperRef.current.classList.add(classes.invalid)
            }
            props.setErrors(`${props.reqId}-${props.name}`)
        }
        return result
    }

    const onReset = () => {
        let value = selectRef.current ? selectWrapperRef.value : inputRef.current.value
        if(value === props.defaultValue || value === "") return
        setReset(prev => !prev)
        action(props.name , props.defaultValue)
        const noErrors = validation(props.defaultValue)
        if(noErrors) props.removeError(`${props.reqId}-${props.name}`)
    }

    const onFocus = () => {
        setError("")
        if(selectWrapperRef.current){
            selectWrapperRef.current.classList.remove(classes.invalid)
        } else{
            inputRef.current.classList.remove(classes.invalid)
        }
    }

    const validateInput = () => {
        const noErrors = validation()
        if(noErrors) props.removeError(`${props.reqId}-${props.name}`)
    }

    const handleInputChange = (e) => {
        const input = e.target.value
        const trimmedInput = input.replaceAll(" ", "")
        e.target.value = trimmedInput
        action(props.name , trimmedInput)
    }

    const handleSelect = (e) => {
        selectWrapperRef.value  = e.value
        action(props.name, e.value)
    }


    useEffect(() => {
        if(selectRef.current && defaultSelectedValue){
            selectRef.current.setValue(defaultSelectedValue)
            selectWrapperRef.value  = defaultSelectedValue
        } else if(selectRef.current){
            selectRef.current.setValue({value: '', title: ''})
            selectWrapperRef.value  = ''
        } else {
            inputRef.current.value = props.defaultValue ?? ''
        }
        validation()
        onFocus()
    }, [props.clear, props.isAccess, reset])


    return(
        <div className={classes.requiest_query}>
            <div className={classes.name_container}>
                <p>{props.name} {props.required ? <span className={classes.required}> *</span> : null}</p>
                <p>{props.inputType}</p>
            </div>
            <div className={classes.description_container}>
                <p> {props.description}</p>
                <div className={classes.input_group}>
                {props.options 
                ?
                <div className={classes.select_wrapper} ref={selectWrapperRef}>
                    <Select
                    onFocus={onFocus}
                    onBlur={validateInput}
                    options={props.options}
                    ref={selectRef}
                    onChange={handleSelect}
                    isDisabled={!props.isAccess || props.disabled}
                    />
                </div>
                : 
                <input
                required = {props.required}
                id={`${props.reqId}-${props.name}`}
                ref={inputRef}
                onChange={handleInputChange}
                onFocus={onFocus}
                onBlur={validateInput}
                disabled={!props.isAccess || props.disabled}
                type="text" />}
                {!props.disabled && <Reset onClick = {onReset} />}
                </div>
                <p className={classes.error}>{error}</p>
            </div>
        </div>
    )
}

export default memo(RequestQuery)
