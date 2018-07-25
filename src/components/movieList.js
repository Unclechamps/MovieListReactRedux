
import React, {Component} from 'react'
import '../index.css'
import { connect } from 'react-redux'

import * as actionCreators from '../store/actionCreators'

class MovieList extends Component {


render() {

  let movies = this.props.detail.map((movie, index) => {
    return (

      <div className='indMovie' key={index}>

        <h3 className='title'>{movie.title}</h3>
        <img className='poster' src={movie.imageURL} alt='' />
        <p className='price'>${movie.price}</p>
        <button onClick={() =>this.props.onAddToCart(movie)}>Add To Cart</button>
        <button onClick={() =>this.props.onDeleteMovie(movie)}>Delete Movie</button>
      </div>
    )
  })

  return (
    <div className='movieList'>
      <h1>Movies</h1>
      {movies}
    </div>
    );
  }
}

  const mapStateToProps = (state) => {
    return {
      detail : state.movieList
    }
}

  const mapDispatchToProps = (dispatch) => {
    return {
      onDeleteMovie : (movie) => dispatch(actionCreators.deleteMovie(movie)),
      onAddToCart : (movie) => dispatch(actionCreators.addToCart(movie))

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(MovieList)
