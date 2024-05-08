import { memo, useRef, useEffect, useState } from "react";
import classes from "./select-wrapper.module.css";
import Select from 'react-select'

function SelectWrapperComponent(props) {
  const selectWrapperRef = useRef(null)
  const selectRef = useRef(null)
  const optionsExist = props.options && props.options.length
  const defaultSelectedValue = optionsExist && props.options.find(option => option.value === props.defaultValue)

  const handleSelect = (e) => {
    selectWrapperRef.current.value = e.value
    props.action(props.name, e.value)
    selectRef.current.blur()
  }

  useEffect(() => {
    if(defaultSelectedValue){
      selectRef.current.setValue(defaultSelectedValue)
      selectWrapperRef.current.value = defaultSelectedValue
  } else{
      selectRef.current.setValue({value: '', title: ''})
      selectWrapperRef.current.value  = ''
  }
  props.validation(selectWrapperRef.current)
  }, [props.clear, props.reset])

  useEffect(() => {
    if(defaultSelectedValue){
        selectRef.current.setValue(defaultSelectedValue)
        selectWrapperRef.current.value = defaultSelectedValue
    } else{
        selectRef.current.setValue({value: '', title: ''})
        selectWrapperRef.current.value  = ''
    }
    props.validation(selectWrapperRef.current)
    props.onFocus(selectWrapperRef.current)
}, [props.isAccess])

  return (
    <div className={classes.select_wrapper} ref={selectWrapperRef}>
      <Select
        isSearchable={true}
        onFocus={() => props.onFocus(selectWrapperRef.current)}
        onBlur={() => props.validation(selectWrapperRef.current)}
        options={props.options}
        ref={selectRef}
        onChange={handleSelect}
        isDisabled={!props.isAccess || props.disabled}
      />
    </div>
  );
}

export const SelectWrapper = memo(SelectWrapperComponent);
