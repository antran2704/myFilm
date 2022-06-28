import { useState } from "react";
import Modal from "../../Modal/Modal";
import "./Search.scss";

function SearchItem({data}) {
  const [showModal,setShowModal] = useState(false)

  function handleModal() {
    setShowModal(!showModal)
  }
  return (
    <div>
      <div className="search_item" onClick={handleModal}>
        <img
          className="search_img"
          src= {data && data.movie.thumb_url}
          alt="hinh anh"
        />
        <p className="search_name">{data && data.movie.name}</p>
      </div>
      <Modal show={showModal} onClick={handleModal} data = {[data.movie]} url = {data.episodes}/> 
    </div>

  );
}

export default SearchItem;
