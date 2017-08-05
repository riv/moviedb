import SearchMovies from './search_movies';
import { connect } from 'react-redux';
import { movieSearch } from '../../actions/movie_actions';

const mapStateToProps = ({ movies }) => ({
  movies: movies.movies
});

const mapDispatchToProps = dispatch => ({
  movieSearch: queryString => dispatch(movieSearch(queryString))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchMovies);
