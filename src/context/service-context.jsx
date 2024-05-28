import { createContext, useEffect, useReducer } from "react";
import { reducer } from "./service-reducer";
import { data } from "../data";
import { useLocation, useNavigate } from "react-router-dom";

export const serviceContext = createContext()
const initialValue = {
    selectedService: {},
    servicesList: {}
}

export function ServiceContextProvider({ children }) {
    const [value, dispatch] = useReducer(reducer, initialValue)

    const navigate = useNavigate()
    const location = useLocation()

    value.setServices = (services) => {
        dispatch({ type: "SET_SERVICES_LIST", payload: services })
    }

    
    
    value.selectService = (service) => {
        if(typeof service === "object") {
            dispatch({ type: 'SELECT_SERVICE', payload: service })
        } else {
            throw new Error('Miss data type (wait fot object)')
        }
    }



    useEffect(() => {
        dispatch({ type: "SET_SERVICES_LIST", payload: data })
    }, [])


    useEffect(() => {
        let selected
        if(!location.search) {
            selected = 'jsonplaceholder'
        } else{
            // console.log(new URLSearchParams(location.search).get("service")); 

            // for (const key of new URLSearchParams(location.search).keys()) {
            //     console.log(key);
            // }


            const queryParams = location.search.slice(1).split('&')
            for (const pair of queryParams) {
                const [key, page] = pair.split('=')
                if (key === 'service' && data[page.toLowerCase()]) {
                    selected = page.toLowerCase()
                }
            }
        }
        
        if (!selected) {
            navigate('/not-found')
        } else{
            // value.selectService(data[selected]);
            value.selectService(data[selected]);
            // dispatch({ type: 'SELECT_SERVICE', payload: data[selected] })
        }
        
    }, [location])

    return (
        <serviceContext.Provider value={value}>
            {children}
        </serviceContext.Provider>
    )
}