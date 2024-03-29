export function objectToArray(object){
    const res = []
    for (const key in object) {
        if(object[key]){
            const corteg = [key, object[key]]
            res.push(corteg)
        }
    }
    return res
}