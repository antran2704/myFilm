import axios from "axios";
import * as types from "../type";

export const request = axios.create({
  headers: {
    "content-type": "aplication/json"
  }
})

export const getMoviePage = (page) => async (dispath) => {
  try {
    const result = await request.get(
      `/danh-sach/phim-moi-cap-nhat?page=${page}`
    );
    dispath({
      type: types.GET_MOVIE_PAGE,
      payload: result.data.items,
    });
  } catch (error) {
    console.log("Get movie page API error", error);
  }
};

export const getMovie = (slug) => async (dispath) => {
  try {
    const result = await request.get(
      `/phim/${slug}`
    );
    dispath({
      type: types.GET_MOVIE,
      payload: result.data.movie,
    });
  } catch (error) {
    console.log("Get movie  error", error);
  }
};

export const getMovieDetail = (movie) => function(dispath) {
  return dispath({ type: types.GET_MOVIE_DETAIL, payload: movie });
}

