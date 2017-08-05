import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import SearchMoviesContainer from './search_movies';
import Error404 from './error404';

class App extends React.Component {
  render() {
    return(
      <div className="App">
        <Route component={SearchMoviesContainer}/>
      </div>
    );
  }
}

export default App;
