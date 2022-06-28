import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useViewport } from "../../hook";
import { AiOutlineLoading } from "react-icons/ai";
import {animateScroll} from "react-scroll"
import * as type from "../../store/action";
import Category from "../Category/Category";
import Modal from "../Modal/Modal";
import "./Content.scss";
import ContentItem from "./ContentItem";

function Content() {
  
  const dispath = useDispatch();
  const scroll = animateScroll
  const { MoviePage, MovieDetail } = useSelector((state) => state.movie);
  useEffect(() => {
    dispath(type.getMoviePage(1));
  }, []);
  const [isModal, setIsModal] = useState(false);
  const [movieInfo, setMovieInfo] = useState([]);
  const [urlMovie, setUrlMovie] = useState([]);
  const [indexPage,setIndexPage] = useState(1)
  const [loading,setLoading] = useState(false)
  const [width] = useViewport();
  function handleModal() {
    setIsModal(!isModal);
  }

  function getInfoMovie(movie) {
    setMovieInfo([movie]);
  }

  function getUrlMovie(movieUrl) {
    setUrlMovie(movieUrl);
  }

  const getMoviePage = async function(index) {
    setIndexPage(index)
    if(index != indexPage) {
      setLoading(true)
      scroll.scrollToTop();
      await dispath(type.getMoviePage(index));
      console.log('hello')
      setTimeout(() => {
        setLoading(false)
      },3000)
    }
  }
  return (
    <div>
      <div
        className="content"
        style={
          width > 1200
            ? { gridTemplateColumns: "repeat(5,auto)" }
            : width > 1000
            ? { gridTemplateColumns: "repeat(4,auto)" }
            : width > 760
            ? { gridTemplateColumns: "repeat(3,auto)" }
            : width > 600
            ? { gridTemplateColumns: "repeat(2,auto)" }
            : { gridTemplateColumns: "repeat(1,auto)" }
        }
      >
        {MoviePage &&
          MoviePage.map(function (data, index) {
            return (
              <ContentItem
                movieUrl={getUrlMovie}
                key={index}
                getInfo={getInfoMovie}
                onClick={handleModal}
                data={data}
              />
            );
          })}

        <Modal
          url={urlMovie}
          data={movieInfo}
          show={isModal}
          onClick={handleModal}
        />
      </div>

      {loading && <div className="content_loading">
        <AiOutlineLoading className="content_loading-icon" />
      </div>}

      {MoviePage && <Category active={indexPage} onClick={getMoviePage} />}
    </div>
  );
}

export default Content;
