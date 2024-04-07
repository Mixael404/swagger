export class APIService{

    /**
     * 
     * @param {string} url 
     * @param {GET || POST} method 
     * @param {object} headers 
     * @param {object} body 
     * @returns 
     */
    async requiest(url, method, headers, body = null){
        const params = {
            method: method,
            headers: {...headers},
        }

        if(method !== "GET"){
            params.body = JSON.stringify(body)
        }

        const response = await fetch(url, params)
        const data = await response.text()
        return data;
    }
}

export const apiService = new APIService()