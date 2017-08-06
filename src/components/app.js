import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import SearchMoviesContainer from './search/search_movies_container';
import SearchbarContainer from './nav/nav_container';
import ProfileContainer from './profile/profile_container';
import Error404 from './error404';
import './app.css';

class App extends React.Component {
  render() {
    return(
      <div className="App">
        <Route component={SearchbarContainer}/>
        <Switch>
          <Route path="/movie/:movie_id" component={ProfileContainer}/>
          <Route path="/" component={SearchMoviesContainer}/>
          <Route component={Error404}/>
        </Switch>
      </div>
    );
  }
}

export default App;
