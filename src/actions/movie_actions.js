import * as APISearchUtil from '../util/movies_util'

export const RECEIVE_MOVIES = "RECEIVE_MOVIES";

export const receiveMovies = movies => ({
  type: RECEIVE_MOVIES,
  movies
});

export const movieSearch = queryString => dispatch => (
  APISearchUtil.movieSearch(queryString).then(
    resp => dispatch(receiveMovies(resp.results))
  )
);
