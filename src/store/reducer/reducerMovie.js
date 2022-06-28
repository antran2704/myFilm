import * as type from "../type";

const reducerMovieInitialState = {
  MoviePage: null,
  MovieDetail: null,
  Movie: {},
};

const reducerMovie = (state = reducerMovieInitialState, action) => {
  switch (action.type) {
    case type.GET_MOVIE_PAGE:
      return { ...state, MoviePage: action.payload };
    case type.GET_MOVIE_DETAIL:
      return { ...state, MovieDetail: action.payload };
    case type.GET_MOVIE:
      return { ...state, Movie: action.payload };
    default:
      return state;
  }
};

export default reducerMovie;
