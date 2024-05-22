import { memo, useCallback, useState } from "react"
import classes from "./add-service.module.css"
import Layout from "../../components/layouts/main-layout/layout"
import { Input } from "../../components/ui/input/input"
import { PageTitle } from "../../components/ui/page-title/page-title"
import { BackArrow } from "../../components/back-arrow/back-arrow"
import { AddRequest } from "../../components/add-request/add-request"
import { AddString } from "../../components/add-string/add-string"

function AddServiceComponent() {
    const [requests, setRequests] = useState([])

    const callbacks = {
        addService: useCallback(() => {
            const id = requests.length ? requests[requests.length - 1] + 1 : 1
            const newRequests = [...requests, id]
            setRequests(newRequests)
        }, [requests])
    }
    return (
        <>
        <BackArrow />
            <Layout>
                <PageTitle title={"Add your own API service to our catalog!"} />
                <Input label={"Name of your API service"} />
                {
                    requests.map(item => <AddRequest key={item} id={item}/>)
                }
                <AddString onClick={callbacks.addService} />
            </Layout>
        </>
    )
}

export const AddService = memo(AddServiceComponent)