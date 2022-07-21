import axios from "axios";
import { useEffect, useState } from "react";
import { AiOutlineLoading } from "react-icons/ai";
import { useLocation } from "react-router-dom";
import { useViewport } from "../../../hook";
import "./Search.scss";
import SearchItem from "./SearchItem";

const useQuery = () => new URLSearchParams(useLocation().search);

function Search() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();
  const keywords = useQuery().get("keywords");
  const [width] = useViewport();
  const search = keywords
    .normalize("NFD")
    .toLowerCase()
    .replace(":", "")
    .replace(/ /g, "-")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D");
  // useEffect(() => {
  //   const handler = setTimeout(async () => {
  //     setLoading(true);
  //     await dispath(types.searchMovie(search.trim()));
  //     setLoading(false);
  //   }, 800);

  //   return () => {
  //     clearTimeout(handler);
  //   };
  // }, [search]);

  useEffect(() => {
    const arr = [];
    const handler = setTimeout(async () => {
      setLoading(true);
      for (var i = 1; i <= 50; i++) {
        const data = await axios.get(
          `https://ophim1.com/danh-sach/phim-moi-cap-nhat?page=${i}`
        );
        data.data.items.map(function (items, index) {
          if (items.slug.includes(search)) {
            arr.push(items);
          }
        });
      }

      setData(arr);
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
      {data &&
        data.map(function (data, index) {
          return <SearchItem key={index} data={data} />;
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
