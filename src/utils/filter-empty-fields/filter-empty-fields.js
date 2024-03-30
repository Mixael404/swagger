export function filterEmptyFields(object){
    const res = {}
    for (const key in object) {
        if(object[key]){
            res[key] = object[key]
        }
    }   
    return res
}