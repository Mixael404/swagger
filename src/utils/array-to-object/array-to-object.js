export function arrayToObject(array){
    const object = {}
    for (const item of array) {
        if(!Array.isArray(item)){
            object[item] = null
        } else{
            object[item[0]] = item[1]
        }
    }
    return object;
}