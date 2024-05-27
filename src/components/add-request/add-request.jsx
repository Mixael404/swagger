import { memo, useCallback, useState } from "react"
import classes from "./add-request.module.css"
import CollapseCard from "../collapse-card/collapse-card"
import { Input } from "../ui/input/input"
import { CustomSelect } from "../custom-select/custom-select"
import { Controller, useFormContext } from "react-hook-form"
import { DeleteCross } from "../ui/delete-cross/delete-cross"
import { AddString } from "../add-string/add-string"
import { AddParameter } from "../add-parameter/add-parameter"
import { addNewFormField } from "../../utils/add-new-form-field/add-new-form-field"
import { removeFormField } from "../../utils/remove-form-field.js/remove-form-field"
import { methods } from "../../options/options"

function AddRequestComponent({ id, onRemove }) {
    const [title, setTitle] = useState("")
    const [method, setMethod] = useState("")
    const [params, setParams] = useState([])

    const { control, unregister } = useFormContext()
    const callbacks = {
        addTitle: useCallback((title) => {
            setTitle(title)
        }, []),
        selectMethod: useCallback((method) => {
            setMethod(method)
        }, []),

        addParam: useCallback(() => {
            addNewFormField(params, setParams)
        }, [params]),

        deleteParam: useCallback((paramId) => {
            removeFormField(paramId,`${id}.params.param${paramId}`,params, setParams, unregister)
        }, [params])
    }


    return (
        <div className={classes.add_request}>
            <DeleteCross onClick={onRemove} id={id}/>
            <CollapseCard
                id={id}
                title={title}
                method={method}
            >
                <Controller
                    name={`${id}.title`}
                    control={control}
                    defaultValue={""}
                    rules={{ required: "This value can not be empty!" }}
                    render={({ field, fieldState: { error } }) => (
                        <Input label={"Title"} {...field} changeState={callbacks.addTitle} error={error?.message} />
                    )}
                />
                <Controller
                    name={`${id}.method`}
                    control={control}
                    rules={{ required: "This value can not be empty!" }}
                    render={({ field, fieldState: { error } }) => (
                        <CustomSelect
                            {...field}
                            label={"Select method"}
                            options={methods}
                            changeState={callbacks.selectMethod}
                            error={error?.message}
                        />
                    )}
                />
                <Controller
                    name={`${id}.base_url`}
                    control={control}
                    rules={{ required: "This value can not be empty!" }}
                    defaultValue={""}
                    render={({ field, fieldState: { error } }) => (
                        <Input label={"Base url"} {...field} error={error?.message} />
                    )}
                />
                <Controller
                    name={`${id}.tooltipContent`}
                    control={control}
                    defaultValue={""}
                    rules={{required: false}}
                    render={({ field, fieldState: { error } }) => (
                        <Input label={"Tooltip content"} {...field} error={error?.message} />
                    )}
                />
                {params.length ? <h3 className={classes.params__title}>Parameters:</h3> : null}
                <div className={params.length ? classes.params_group : null}>
                    {params.map(param => <AddParameter onDelete={callbacks.deleteParam} key={param} id={param} parentRequestId={id}/>)}
                </div>
                <AddString align={"center"} text={"Add parameter"} onClick={callbacks.addParam}/>
            </CollapseCard>
        </div>
    )
}

export const AddRequest = memo(AddRequestComponent)