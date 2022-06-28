import "./Search.scss";
import SearchItem from "./SearchItem";
import { useViewport } from "../../../hook";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineLoading } from "react-icons/ai";
import * as types from "../../../store/action";
import Modal from "../../Modal/Modal";

const useQuery = () => new URLSearchParams(useLocation().search);

function Search() {
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const dispath = useDispatch();
  const keywords = useQuery().get("keywords");
  const [width] = useViewport();
  const { SearchMovie } = useSelector((state) => state.movie);
  let movies = [SearchMovie] 
  const search = keywords
    .normalize("NFD")
    .toLowerCase()
    .replace(":","")
    .replace(/ /g, "-")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D");
  useEffect(() => {
    const handler = setTimeout(async () => {
      setLoading(true);
      await dispath(types.searchMovie(search.trim()));
      setLoading(false);
    }, 800);

    return () => {
      clearTimeout(handler);
    };
  }, [search]);

  
  return (
    <div
      className="search"
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
      {SearchMovie &&
        movies.map(function (data, index) {
            return (<SearchItem key={index} data={data} />)
        })}

      {loading && (
        <div className="search_loading">
          <AiOutlineLoading className="search_loading-icon" />
        </div>
      )}
    </div>
  );
}

export default Search;
