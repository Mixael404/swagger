export function addParamsToUrl(baseUrl, params){
    const queryString = ["?"];
    for (const key in params) {
      if (params[key]) {
        const string = `${key}=${params[key]}&`;
        queryString.push(string);
      }
    }
    const paramsString = queryString.join("").slice(0, -1);
    return (`${baseUrl}${paramsString}`);
}