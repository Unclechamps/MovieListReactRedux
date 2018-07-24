import React, { Component } from 'react';
import './index.css';
import AddMovie from './components/AddMovie'

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      movieList : []
    }
  }

  render() {
    return (
      <div>
        <h1>Movies</h1>
        <AddMovie />
        <movieList />
        {this.props.children}
      </div>
    );
  }
}

export default App;
