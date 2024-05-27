export function addNewFormField(currentState, setState){
    const nextId = currentState.length ? currentState[currentState.length - 1] + 1 : 1
    setState(prev => [...prev, nextId])
}