import { memo, useCallback, useEffect, useState } from "react"
import classes from "./add-parameter.module.css"
import { Controller, useFormContext } from "react-hook-form"
import { Input } from "../ui/input/input"
import { CustomSelect } from "../custom-select/custom-select"
import { CustomCheckbox } from "../ui/custom-checkbox/custom-checkbox"
import { DeleteCross } from "../ui/delete-cross/delete-cross"
import { addNewFormField } from "../../utils/add-new-form-field/add-new-form-field"
import { removeFormField } from "../../utils/remove-form-field.js/remove-form-field"
import { paramTypes, inputTypes } from "../../options/options"
import { MinMaxNumberInputs } from "../min-max-number-inputs/min-max-number-inputs"
import { OptionsSelectInputs } from "../options-select-inputs/options-select-inputs"

function AddParameterComponent({ parentRequestId, id, onDelete }) {

    const [title, setTitle] = useState("New parameter")
    const [inputType, setInputType] = useState("string")
    const [options, setOptions] = useState([])

    const { control, unregister, watch, trigger } = useFormContext()

    const watchDisabledValue = watch(`${parentRequestId}.params.param${id}.isDisabled`)

    const callbacks = {
        addOption: useCallback(() => {
            addNewFormField(options, setOptions)
        }, [options, setOptions]),

        removeOption: useCallback((optionId) => {
            removeFormField(optionId,`${parentRequestId}.params.param${id}.options.option${optionId}`, options, setOptions, unregister)
        }, [options, setOptions])
    }

    useEffect(() => {
        trigger(`${parentRequestId}.params.param${id}.defaultValue`)
    }, [watchDisabledValue])

    return (
        <div className={classes.add_parameter}>
            <div className={classes.parameter_heading}>
                <h4 className={classes.parameter_title}>{title}</h4>
                <DeleteCross onClick={onDelete} id={id} />
            </div>
            <Controller
                name={`${parentRequestId}.params.param${id}.name`}
                control={control}
                defaultValue={""}
                rules={{ required: "This value can not be empty!" }}
                render={({ field, fieldState: { error } }) => (
                    <Input changeState={(title) => setTitle(title)} label={"Title"} error={error?.message} {...field} />
                )}
            />
            <Controller
                name={`${parentRequestId}.params.param${id}.paramGroup`}
                control={control}
                defaultValue={""}
                rules={{ required: "This value can not be empty!" }}
                render={({ field, fieldState: { error } }) => (
                    <CustomSelect options={paramTypes} label={"Type of parameter"} error={error?.message} {...field} />
                )}
            />
            <Controller
                name={`${parentRequestId}.params.param${id}.description`}
                control={control}
                defaultValue={""}
                rules={{ required: false }}
                render={({ field, fieldState: { error } }) => (
                    <Input label={"Description"} error={error?.message} {...field} />
                )}
            />
            <Controller
                name={`${parentRequestId}.params.param${id}.defaultValue`}
                control={control}
                defaultValue={""}
                rules={{
                    validate: (value) => watchDisabledValue ? (value.trim() !== "" || "You have to pass this value if disabled option is enabled") : true
                 }}
                render={({ field, fieldState: { error } }) => (
                    <Input label={"Default value"} error={error?.message} {...field} />
                )}
            />
            <Controller
                name={`${parentRequestId}.params.param${id}.isRequired`}
                control={control}
                defaultValue={false}
                render={({ field }) => (
                    <CustomCheckbox {...field} fieldName={`${parentRequestId}-${id}-required`} />
                )}
            />
            <Controller
                name={`${parentRequestId}.params.param${id}.isDisabled`}
                control={control}
                defaultValue={false}
                render={({ field }) => (
                    <CustomCheckbox {...field} fieldName={`${parentRequestId}-${id}-disabled`} />
                )}
            />
            <Controller
                name={`${parentRequestId}.params.param${id}.inputType`}
                control={control}
                defaultValue={""}
                rules={{ required: "This value can not be empty!" }}
                render={({ field, fieldState: { error } }) => (
                    <CustomSelect changeState={(value) => setInputType(value)} options={inputTypes} label={"Type of input"} error={error?.message} {...field} />
                )}
            />
            {
                inputType === "number" && <MinMaxNumberInputs parentRequestId={parentRequestId} paramId={id}/>
            }
            {
                inputType === "select" && <OptionsSelectInputs 
                options={options}
                parentRequestId={parentRequestId} 
                paramId={id}
                addOption={callbacks.addOption}
                removeOption={callbacks.removeOption}
                />
            }
        </div>
    )
}

export const AddParameter = memo(AddParameterComponent)