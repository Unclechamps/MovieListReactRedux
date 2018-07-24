import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import App from './App';
import MovieList from './components/movieList'
import AddMovie from './components/AddMovie'
import {createStore} from 'redux'
import reducer from './store/reducer'
import {Provider} from 'react-redux'
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <BrowserRouter>
  <Provider store = {store}>
    <App>
      <Switch>
        <Route path = "/" component = {MovieList} />
        <Route path = "/addmovie" component = {AddMovie} />
      </Switch>
    </App>
  </Provider>
</BrowserRouter>


  , document.getElementById('root'));
registerServiceWorker();
