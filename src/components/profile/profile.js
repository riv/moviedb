import React from 'react';
import { withRouter } from 'react-router-dom';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.props.movieSearchById(this.props.match.params.movie_id);
    this.renderProfile = this.renderProfile.bind(this);
    this.renderNotFound = this.renderNotFound.bind(this);
  }

  renderProfile () {
    const { movie } = this.props;
    return (
      <div>
        <h3>{movie.original_title}</h3>
        <img className="photo"
          src={ movie.poster_path ? `https://image.tmdb.org/t/p/w1280${movie.poster_path}` : 'https://critics.io/img/movies/poster-placeholder.png'}
          alt={ movie.title }
          width={100}
          height={150}/>
        <p>{movie.overview}</p>
        <p>{`Budget: $${movie.budget}`}</p>
        <p>{`Homepage: ${movie.homepage}`}</p>
      </div>
    );
  }

  renderNotFound() {
    return (
      <p>Sorry, there is no movie matching the given id</p>
    );
  }

  render() {
    return(
      <div>
        { this.props.error === '' ? this.renderProfile() : this.renderNotFound()}
      </div>
    );
  }
}

export default withRouter(Profile);
