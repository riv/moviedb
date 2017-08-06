import * as APISearchUtil from '../util/movies_util'

export const RECEIVE_MOVIES = "RECEIVE_MOVIES";
export const RECEIVE_MOVIE = "RECEIVE_MOVIE";
export const RECEIVE_ERROR = "RECEIVE_ERROR";

export const receiveMovies = movies => ({
  type: RECEIVE_MOVIES,
  movies
});

export const receiveMovie = movie => ({
  type: RECEIVE_MOVIE,
  movie
});

export const receiveError = error => ({
  type: RECEIVE_ERROR,
  error
});

export const movieSearch = queryString => dispatch => (
  APISearchUtil.movieSearch(queryString).then(
    resp => dispatch(receiveMovies(resp.results))
  )
);

export const movieSearchById = id => dispatch => (
  APISearchUtil.movieSearchById(id).then(
    resp => {
      if (resp.status_code) {
        dispatch(receiveError(resp.status_message))
      } else{
        dispatch(receiveMovie(resp))
      }
    }
  )
);
