import { createContext, useEffect, useReducer } from "react";
import { reducer } from "./service-reducer";
import { data } from "../data";

export const serviceContext = createContext()
const initialValue = {
    selectedService: {},
    servicesList: {}
}

export function ServiceContextProvider({children}){
    const [value, dispatch] = useReducer(reducer, initialValue)

    value.setServices = (services) => {
        dispatch({type: "SET_SERVICES_LIST", payload: services})
    }

    value.selectService = (service) =>{
        dispatch({type: 'SELECT_SERVICE', payload: service})
    }


    useEffect(() => {
        dispatch({type: "SET_SERVICES_LIST", payload: data})
        dispatch({type: 'SELECT_SERVICE', payload: data.jsonplaceholder})
    }, [])
    
    return(
        <serviceContext.Provider value={value}>
            {children}
        </serviceContext.Provider>
    )
}