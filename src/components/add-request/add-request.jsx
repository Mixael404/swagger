import { memo, useCallback, useState } from "react"
import classes from "./add-request.module.css"
import CollapseCard from "../collapse-card/collapse-card"
import { Input } from "../ui/input/input"
import { CustomSelect } from "../custom-select/custom-select"

function AddRequestComponent({ id }) {
    const [title, setTitle] = useState("")
    const [method, setMethod] = useState("")

    const callbacks = {
        addTitle: useCallback((title) => {
            setTitle(title)
        }, []),
        selectMethod: useCallback((method) => {
            setMethod(method)
        }, [])
    }

    const methods = [
        '',
        "GET",
        "POST",
        "PUT",
        "DELETE"
    ]

    return (
        <div className={classes.add_request}>
            <CollapseCard
                id={id}
                title={title}
                method={method}
            >

                <Input label={"Title"} onChange={callbacks.addTitle} />
                <CustomSelect
                    label={"Select method"}
                    options={methods}
                    onSelect={callbacks.selectMethod}
                />
                <Input label={"Base url"} />

            </CollapseCard>
        </div>
    )
}

export const AddRequest = memo(AddRequestComponent)