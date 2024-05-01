import { createContext, useEffect, useReducer } from "react";
import { reducer } from "./service-reducer";
import { data } from "../data";
import { useLocation } from "react-router-dom";

export const serviceContext = createContext()
const initialValue = {
    selectedService: data['jsonplaceholder'],
    servicesList: {}
}

export function ServiceContextProvider({ children }) {
    const [value, dispatch] = useReducer(reducer, initialValue)

    const location = useLocation()
    value.setServices = (services) => {
        dispatch({ type: "SET_SERVICES_LIST", payload: services })
    }

    value.selectService = (service) => {
        dispatch({ type: 'SELECT_SERVICE', payload: service })
    }


    useEffect(() => {
        dispatch({ type: "SET_SERVICES_LIST", payload: data })
    }, [])


    useEffect(() => {
        let selected
        const queryParams = location.search.slice(1).split('&')

        for (const pair of queryParams) {
            const [key, page] = pair.split('=')
            if (key === 'service' && data[page.toLowerCase()]) {
                selected = page.toLowerCase()
            }
        }

        if (!selected) selected = 'jsonplaceholder'
        
        dispatch({ type: 'SELECT_SERVICE', payload: data[selected] })
    }, [location])

    return (
        <serviceContext.Provider value={value}>
            {children}
        </serviceContext.Provider>
    )
}