import * as actionTypes from './actionTypes'


const initialState = {
    movieList : [{title : "Jurassic Park", imageURL : 'https://upload.wikimedia.org/wikipedia/en/e/e7/Jurassic_Park_poster.jpg', price : 13}],
    cartList : [],
    total : 0
}

const reducer = (state = initialState, action) => {

  switch(action.type) {
    case actionTypes.ADD_MOVIE:
      return {
        ...state,
        movieList : state.movieList.concat(action.movie)
      }
    case actionTypes.DELETE_MOVIE:
      return {
        ...state,
        movieList : state.movieList.filter(movie => movie !== action.movie)
      }
    case actionTypes.ADD_TO_CART:
      return {
        ...state,
        cartList : state.cartList.concat(action.movie),
        total : state.total += parseInt(action.movie.price)
      }
    case actionTypes.DELETE_CART_MOVIE:
      return {
        ...state,
        cartList : state.cartList.filter(movie => movie !== action.movie)
      }
    case actionTypes.LIST_MOVIE:
      return {
          ...state.
          movieList : json
      }
    }

  return state

}



export default reducer
