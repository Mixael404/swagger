import { memo } from "react"
import classes from "./min-max-number-inputs.module.css"
import { useFormContext } from "react-hook-form"
import { Controller } from "react-hook-form"
import { Input } from "../ui/input/input"

function MinMaxNumberInputsComponent({ parentRequestId, paramId }) {

    const { control } = useFormContext()
    return (
        <>
            <Controller
                name={`${parentRequestId}.params.param${paramId}.maxValue`}
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
                name={`${parentRequestId}.params.param${paramId}.minValue`}
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
                    <Input label={"Minimum possible value"} error={error?.message} {...field} />
                )}
            />
        </>
    )
}

export const MinMaxNumberInputs = memo(MinMaxNumberInputsComponent)