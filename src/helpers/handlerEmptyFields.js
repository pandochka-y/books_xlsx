
const handlerEmptyFields = (obj) => {
    const filteredObject = {}
    for (let key of Object.keys(obj)) {
        if (obj[key]) filteredObject[key] = obj[key]
    }
    return filteredObject
}