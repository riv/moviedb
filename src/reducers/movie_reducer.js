import { RECEIVE_MOVIES } from '../actions/movie_actions'

const MovieReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_MOVIES:
      return { movies: action.movies };
    default:
      return state;
  };
};

export default MovieReducer;
