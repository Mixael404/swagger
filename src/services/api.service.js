import axios from "axios"

export class APIService{

    /**
     * 
     * @param {string} url 
     * @param {string} method 
     * @param {object} headers 
     * @param {object} body 
     * @returns {Promise}
     */
    async request(url, method, headers, body = null){
        const params = {
            url,
            method,
            headers: {...headers}
        }
        if(body) params.data = body
        try{
            const response = await axios(params)
            return response.data
        } catch(error){
            return error.message
        }
        // const params = {
        //     method: method,
        //     headers: {...headers},
        // }
        // if(method !== "GET"){
        //     params.body = JSON.stringify(body)
        // }
        // const response = await fetch(url, params)
        // const data = await response.text()
        // return data;
    }
}

export const apiService = new APIService()