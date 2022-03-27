const API_URL = 'https://itunes.apple.com/search?term='
const fetchData = async (searchTerm) => {
    const response = await fetch(API_URL + searchTerm)
    const data = await response.json()
    return data.results
}

const wrapPromise = (promise) => {
    let status = 'pending'
    let result = ''
    let suspender = promise.then(response => {
        status = 'success'
        result = response
    }, err => {
        status = 'error'
        result = err
    })

    return {
        read () {
            if (status === 'pending') {
                throw suspender
            } else if (status === 'error') {
                throw result
            }
            return result
        }
    }
}

export const createResource = (searchTerm) => {
    return {
        result: wrapPromise(fetchData(searchTerm))
    }
}