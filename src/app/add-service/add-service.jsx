import { memo, useCallback, useState } from "react"
import classes from "./add-service.module.css"
import Layout from "../../components/layouts/main-layout/layout"
import { Input } from "../../components/ui/input/input"
import { PageTitle } from "../../components/ui/page-title/page-title"
import { BackArrow } from "../../components/back-arrow/back-arrow"
import { AddRequest } from "../../components/add-request/add-request"
import { AddString } from "../../components/add-string/add-string"
import { Controller, useForm, FormProvider } from "react-hook-form"

function AddServiceComponent() {
    const [requests, setRequests] = useState([])

    const methods = useForm({
        mode: "onChange"
    })

    const {errors} = methods.formState

    function onSubmit(data) {
        console.log(data);
        setRequests([])
        methods.reset();
    }

    const callbacks = {
        addService: useCallback(() => {
            const id = requests.length ? requests[requests.length - 1] + 1 : 1
            const newRequests = [...requests, id]
            setRequests(newRequests)
        }, [requests]),
        
        onRemove: useCallback((removedId) => {
            const newRequests = requests.filter(id => id !== removedId)
            methods.unregister(removedId)
            setRequests(newRequests);
        }, [requests])
    }

    return (
        <>
            <BackArrow />
            <Layout>
                <PageTitle title={"Add your own API service to our catalog!"} />
                <FormProvider {...methods}>
                    <form onSubmit={methods.handleSubmit(onSubmit)}>
                        <Controller
                            name="serviceName"
                            control={methods.control}
                            defaultValue={""}
                            rules={{ required: "This field is required!", minLength: { value: 3, message: "Minimum length is 3 characters" } }}
                            render={({ field }) => (
                                <Input {...field} label={"Name of your API service"} error={errors.serviceName?.message}/>
                            )}
                        />
                        {
                            requests.map(item => <AddRequest key={item} id={item} onRemove={callbacks.onRemove}/>)
                        }
                        <AddString onClick={callbacks.addService} text={'Add request'} align={"center"}/>
                        <input type="submit" />
                    </form>
                </FormProvider>
            </Layout>
        </>
    )
}

export const AddService = memo(AddServiceComponent)