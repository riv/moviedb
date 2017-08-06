import React from 'react';
import { Media } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class SearchMovies extends React.Component {
  constructor(props) {
    super(props);
    this.renderMovies = this.renderMovies.bind(this);
  }

  renderMovies() {
    const { movies } = this.props;
    return (
      <div className="container">
        {movies.map(movie => (
          <Media key={movie.id} className="movie">
            <Media.Left>
              <Link to={`/movie/${movie.id}`}>
                <img className="photo"
                  src={ movie.poster_path ? `https://image.tmdb.org/t/p/w1280${movie.poster_path}` : 'https://critics.io/img/movies/poster-placeholder.png'}
                  alt={ movie.title }
                  width={100}
                  height={150}/>
              </Link>
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

  render() {
    return (
      <div>
        {this.renderMovies()}
      </div>
    );
  }
}

export default SearchMovies;
