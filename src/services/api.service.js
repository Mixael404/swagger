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
    }
}

export const apiService = new APIService()