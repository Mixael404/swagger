export function removeFormField(removeId, currentFieldPath, currentState, setState, unregister) {
  const newState = currentState.filter((id) => removeId !== id);
  unregister(currentFieldPath);
  setState(newState);
}
