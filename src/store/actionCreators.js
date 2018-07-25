
import * as actionTypes from './actionTypes'

export const addMovie = (movie) => {
  return {
    type: actionTypes.ADD_MOVIE,
    movie : movie
  }
}

export const deleteMovie = (movie) => {
  return {
    type: actionTypes.DELETE_MOVIE,
    movie : movie
  }
}

export const addToCart = (movie) => {
  return {
    type: actionTypes.ADD_TO_CART,
    movie : movie
  }
}

export const deleteCartMovie = (movie) => {
  return {
    type: actionTypes.DELETE_CART_MOVIE,
    movie : movie
  }
}
