import Searchbar from './nav';
import { connect } from 'react-redux';
import { movieSearch, movieSearchById, receiveError } from '../../actions/movie_actions';

const mapStateToProps = ({ movies }) => ({
});

const mapDispatchToProps = dispatch => ({
  movieSearch: queryString => dispatch(movieSearch(queryString)),
  movieSearchById: queryString => dispatch(movieSearchById(queryString)),
  clearError: () => dispatch(receiveError(''))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Searchbar);
