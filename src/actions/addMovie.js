export const addMovie = (movieData)=>{
    return {
        type: 'ADD_MOVIE',
        payload: movieData
    }
}

export const removeMovie = (data)=>{
    return {
        type: 'REMOVE_MOVIE',
        payload: data
    }
}