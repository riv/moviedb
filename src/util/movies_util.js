const API_KEY = '1ec38a1fbf3f19ded30cccb862f0366f';

export const movieSearch = queryString => {
  const newUrl = new URL("https://api.themoviedb.org/3/search/movie");
  const params = {
    api_key: API_KEY,
    language: 'en-US',
    query: queryString,
    page: 1,
    include_adult: false
  };
  Object.keys(params).forEach(key => newUrl.searchParams.append(key, params[key]));
  return fetch(
    newUrl
  ).then(
    resp => resp.json()
  );
};

export const movieSearchById = id => {
  const newUrl = new URL(`https://api.themoviedb.org/3/movie/${id}`);
  const params = {
    api_key: API_KEY,
    language: 'en-US'
  };
  Object.keys(params).forEach(key => newUrl.searchParams.append(key, params[key]));
  return fetch(
    newUrl
  ).then(
    resp => resp.json()
  );
};
