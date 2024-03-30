export function isNonEmptyFields(obj){
    for (const key in obj) {
       if(obj[key]) return true
    }
    return false
}