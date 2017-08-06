import { RECEIVE_MOVIES, RECEIVE_MOVIE, RECEIVE_ERROR } from '../actions/movie_actions'

const _default = {
  movies: [],
  movie: {},
  error: ''
};

const MovieReducer = (state = _default, action) => {
  Object.freeze(state);
  const copy = Object.assign({}, state);
  switch(action.type) {
    case RECEIVE_MOVIES:
      copy.movies = action.movies;
      return copy;
    case RECEIVE_MOVIE:
      copy.movie = action.movie;
      return copy;
    case RECEIVE_ERROR:
      copy.error = action.error;
      return copy;
    default:
      return state;
  };
};

export default MovieReducer;
