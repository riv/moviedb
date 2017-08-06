import Searchbar from './nav';
import { connect } from 'react-redux';
import { movieSearch } from '../../actions/movie_actions';

const mapStateToProps = ({ movies }) => ({
});

const mapDispatchToProps = dispatch => ({
  movieSearch: queryString => dispatch(movieSearch(queryString)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Searchbar);
