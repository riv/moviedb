import Profile from './profile';
import { connect } from 'react-redux';
import { movieSearchById } from '../../actions/movie_actions';

const mapStateToProps = ({ movies }) => ({
  movie: movies.movie,
  error: movies.error
});

const mapDispatchToProps = dispatch => ({
  movieSearchById: (id) => dispatch(movieSearchById(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
