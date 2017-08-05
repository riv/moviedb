import React from 'react';
import { Media, form, Button, Image } from 'react-bootstrap';

class SearchMovies extends React.Component {
  constructor(props) {
    super(props);
    this.renderMovies = this.renderMovies.bind(this);
    this.updateQuery = this.updateQuery.bind(this);
    this.submitQuery = this.submitQuery.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.state = {
      queryString: ''
    };
  }

  renderMovies() {
    const movies = this.props.movies;
    return (
      <div>
        {movies.map(movie => (
          <Media key={movie.id} className="movie">
            <Media.Left>
              <img className="photo"
                src={movie.poster_path ? `https://image.tmdb.org/t/p/w1280${movie.poster_path}` : 'https://critics.io/img/movies/poster-placeholder.png'}
                alt={ movie.title }
                width={100}
                height={150}/>
            </Media.Left>
            <Media.Right>
              <p>Title: {movie.title}</p>
              <p>Id: {movie.id}</p>
            </Media.Right>
          </Media>
        ))}
      </div>
    );
  }

  updateQuery(e) {
    this.setState({queryString: e.target.value});
  }

  handleKeyDown(e) {
    if (e.key === 'Enter' && e.shiftKey === false) {
      e.preventDefault();
      this.props.movieSearch(this.state.queryString);
    }
  }

  submitQuery(e) {
    e.preventDefault();
    this.props.movieSearch(this.state.queryString);
  }

  render() {
    return (
      <div>
        <form onKeyDown={this.handleKeyDown}>
          <input onChange={this.updateQuery} type="text" name="search"/>
        </form>
        <Button onClick={this.submitQuery}>Search</Button>
        {this.renderMovies()}
      </div>
    );
  }
}

export default SearchMovies;
