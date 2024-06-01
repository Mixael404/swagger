import { memo } from "react"
import classes from "./options-select-inputs.module.css"
import { AddString } from "../add-string/add-string"
import { Input } from "../ui/input/input"
import { DeleteCross } from "../ui/delete-cross/delete-cross"
import { Controller } from "react-hook-form"
import { useFormContext } from "react-hook-form"

function OptionsSelectInputsComponent({ options ,parentRequestId, paramId, addOption, removeOption }) {
    const { control } = useFormContext()
    return (
        <>
            {
                options.map((optionId, index) => (
                    <div className={classes.optionAddWrapper} style={{ width: "80%" }} key={optionId}>
                        <Controller
                            name={`${parentRequestId}.params.param${paramId}.options.option${optionId}`}
                            control={control}
                            defaultValue={""}
                            rules={{ required: "This value can not be empty!" }}
                            render={({ field, fieldState: { error } }) => (
                                <div className={classes.option_wrapper}>
                                    <Input label={`Option №${index + 1}`} error={error?.message} {...field} />
                                    <DeleteCross onClick={removeOption} id={optionId} />
                                </div>
                            )}
                        />
                    </div>
                ))
            }
            <AddString text="Add option" onClick={addOption} />
        </>
    )
}

export const OptionsSelectInputs = memo(OptionsSelectInputsComponent)