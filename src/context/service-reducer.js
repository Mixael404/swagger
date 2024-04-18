export function reducer(state, { type, payload }){
    switch(type){
        case ('SET_SERVICES_LIST'):{
            return{
                ...state,
                servicesList: payload
            }
        }
        case ("SELECT_SERVICE"):{
            return{
                ...state,
                selectedService: payload
            }
        }
    }
}