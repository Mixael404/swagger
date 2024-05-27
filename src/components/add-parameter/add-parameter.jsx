import { memo, useCallback, useEffect, useState } from "react"
import classes from "./add-parameter.module.css"
import { Controller, useFormContext } from "react-hook-form"
import { Input } from "../ui/input/input"
import { CustomSelect } from "../custom-select/custom-select"
import { CustomCheckbox } from "../ui/custom-checkbox/custom-checkbox"
import { DeleteCross } from "../ui/delete-cross/delete-cross"
import { AddString } from "../add-string/add-string"
import { addNewFormField } from "../../utils/add-new-form-field/add-new-form-field"
import { removeFormField } from "../../utils/remove-form-field.js/remove-form-field"
import { paramTypes, inputTypes } from "../../options/options"

function AddParameterComponent({ parentRequestId, id, onDelete }) {

    const [title, setTitle] = useState("New parameter")
    const [inputType, setInputType] = useState("string")
    const [options, setOptions] = useState([])

    const { control, unregister, watch, trigger } = useFormContext()

    const watchDisabledValue = watch(`${parentRequestId}.params.param${id}.isDisabled`)

    const callbacks = {
        addOption: useCallback(() => {
            addNewFormField(options, setOptions)
        }, [options]),

        removeOption: useCallback((optionId) => {
            removeFormField(optionId,`${parentRequestId}.params.param${id}.options.option${optionId}`, options, setOptions, unregister)
        }, [options])
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
                inputType === "number" &&
                <>
                    <Controller
                        name={`${parentRequestId}.params.param${id}.maxValue`}
                        control={control}
                        defaultValue={''}
                        rules={{
                            required: false,
                            pattern: {
                                value: /^\d+$/,
                                message: "Please enter some number!"
                            }
                        }}
                        render={({ field, fieldState: { error } }) => (
                            <Input label={"Maximum possible value"} error={error?.message} {...field} />
                        )}
                    />
                    <Controller
                        name={`${parentRequestId}.params.param${id}.minValue`}
                        control={control}
                        defaultValue={''}
                        rules={{
                            required: false,
                            pattern: {
                                value: /^\d+$/,
                                message: "Please enter some number!"
                            }
                        }}
                        render={({ field, fieldState: { error } }) => (
                            <Input label={"Minimum possible value"}  error={error?.message} {...field} />
                        )}
                    />
                </>
            }
            {
                inputType === "select" &&
                <>
                    {
                        options.map((optionId, index) => (
                            <div className={classes.optionAddWrapper} style={{width: "80%"}} key={optionId}>
                                <Controller
                                    name={`${parentRequestId}.params.param${id}.options.option${optionId}`}
                                    control={control}
                                    defaultValue={""}
                                    rules={{ required: "This value can not be empty!" }}
                                    render={({ field, fieldState: { error } }) => (
                                        <Input label={`Option №${index + 1}`} error={error?.message} {...field} />
                                    )}
                                />
                                <DeleteCross onClick={callbacks.removeOption} id={optionId} />
                            </div>
                        ))
                    }

                    <AddString text="Add option" onClick={callbacks.addOption} />
                </>
            }
        </div>
    )
}

export const AddParameter = memo(AddParameterComponent)