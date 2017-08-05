const APIROUTEURL = "https://api.themoviedb.org/3/search/movie";

export const movieSearch = queryString => {
  const newUrl = new URL(APIROUTEURL);
  const params = {
    api_key: '1ec38a1fbf3f19ded30cccb862f0366f',
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
