// debounce function
const debounce = (func , delay = 1000) => {
    let timeoutId
    return (...args) => {
        if (timeoutId) {
            clearTimeout(timeoutId)
        }
       timeoutId =  setTimeout(() => {
            func.apply(null, args) // accept multiple args
        }, delay)
    }

}