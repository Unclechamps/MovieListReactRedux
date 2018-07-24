
import React, {Component} from 'react'
import '../index.css'
import { connect } from 'react-redux'

class AddMovie extends Component {

  constructor(props) {
    super(props)

  }

render() {
  return (
    <div className = "addMovieForm">
    <div>
      <label>Movie Name: </label>
      <input type="text" id="name" onChange={this.props.addTitleNew} name="name" placeholder="Movie name"/>
    </div>
    <div>
      <label>Poster URL: </label>
      <input type="text" id="imageURL"  onChange={this.props.addPosterNew} name="imageURL" placeholder="link to the image" />
    </div>
      <button onClick={() => {this.props.onAddMovie(this.props.title, this.props.poster)}} >Add Movie</button>
    </div>
    );
  }
}

// map state to properties
const mapStateToProps = (state) => {
  return {
    detail : state.movieList,
    title : state.titleNew,
    poster : state.posterNew
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTitleNew : (e) => dispatch({type : "ADD_NEW_TITLE", value : e.target.value}),
    addPosterNew : (e) => dispatch ({type : "ADD_NEW_POSTER", value : e.target.value}),
    onAddMovie : (title, poster) => dispatch({ type : "ADD_MOVIE", title : title, imageURL : poster}),
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(AddMovie)
