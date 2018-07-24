
import React, {Component} from 'react'
import '../index.css'
import { connect } from 'react-redux'

class MovieList extends Component {

  constructor(props) {
    super(props)

    }

render() {

  let movies = this.props.detail.map((movie, index) => {
    return (
      <div className='indMovie' key={index}>
        <h3 className='title'>{movie.title}</h3>
        <img className='poster' src={movie.imageURL} alt='' />
        <button onClick={() =>{this.props.onDeleteMovie(movie)}}>Delete Movie</button>
      </div>
    )
  })

  return (
    <div className='movieList'>
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
      onDeleteMovie : (movie) => {
        console.log(movie)
        dispatch({ type : "DELETE_MOVIE", payload : movie})

    }
}
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieList)
