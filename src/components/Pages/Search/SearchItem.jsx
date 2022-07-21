import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Modal from "../../Modal/Modal";
import "./Search.scss";

function SearchItem({data}) {
  const [showModal,setShowModal] = useState(false)
  const [infor,setInfor] = useState()

  useEffect(() => {
    const getInfor = async () => {
        const result = await axios.get(`https://ophim1.com/phim/${data.slug}`)
        setInfor(result.data)
    }
    getInfor()
  })
  

  function handleModal() {
    setShowModal(!showModal)
  }
  return (
    <div>
      <div className="search_item" onClick={handleModal}>
        <img
          className="search_img"
          src= {infor && infor.movie.thumb_url}
          alt="hinh anh"
        />
        <p className="search_name">{infor && infor.movie.name}</p>
      </div>
      {infor && <Modal show={showModal} onClick={handleModal} data = {[infor.movie]} url = {infor.episodes}/>} 
    </div>

  );
}

export default SearchItem;
