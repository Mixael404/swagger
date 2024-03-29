export function arrayToObject(array){
    const object = {}
    for (const item of array) {
        object[item] = null
    }
    return object;
}