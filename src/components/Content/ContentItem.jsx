import axios from "axios";
import { memo, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as type from "../../store/action";
import "./Content.scss";
function ContentItem({ movieUrl, getInfo, onClick, data }) {
  const [movie, setMovie] = useState({});
  const [urlMovie, setUrlMovie] = useState({});
  useEffect(() => {
    axios.get(`https://ophim1.com/phim/${data.slug}`).then((res) => {
      setMovie(res.data.movie);
      setUrlMovie(res.data.episodes);
    });
  }, [data]);
  return (
    <div
      className="content_item"
      onClick={function () {
        getInfo(movie);
        movieUrl(urlMovie);
        onClick();
      }}
    >
      <img
        className="content_img"
        src={movie && movie.poster_url}
        alt="hinh anh"
      />
      <p className="content_name">{movie && movie.name}</p>
    </div>
  );
}

export default memo(ContentItem);
