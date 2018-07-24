
const initialState = {
    movieList : [{ title : "Jaws", imageURL : "https://m.media-amazon.com/images/M/MV5BMmVmODY1MzEtYTMwZC00MzNhLWFkNDMtZjAwM2EwODUxZTA5XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg"}],
    titleNew : '',
    posterNew : ''
}

const reducer = (state = initialState, action) => {

  if(action.type === "ADD_MOVIE") {
    return {
        ...state,
        movieList : state.movieList.concat(action)
    }
  } else if(action.type === "DELETE_MOVIE") {
      return {
        ...state,
        movieList : state.movieList.filter(movie => movie !== action.payload)
      }
    } else if(action.type === "ADD_NEW_TITLE") {
      return {
        ...state,
        titleNew : action.value
      }
    } else if(action.type === "ADD_NEW_POSTER") {
      return {
        ...state,
        posterNew : action.value
      }
    }

  return state

}


export default reducer
