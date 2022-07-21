import { useEffect, useRef, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
import {useNavigate} from "react-router-dom"
import image from "../../assets/imgs";
import "./Navbar.scss";
function Navbar() {
  const [value, setValue] = useState("");
  const navigate = useNavigate()
  const inputRef = useRef()
  useEffect(() => {
    navigate("/myFilm")
    setValue("")
  },[])

  function getValue(e) {
    let keywords = e.target.value
    setValue(e.target.value)
    keywords.length > 0 ? navigate(`search?keywords=${keywords.trim()}`) : navigate("/myFilm")
  }
  function resetValue() {
    setValue('')
  }
  return (
    <div className="navbar">
      <Link to="/myFilm">
        <img onClick={resetValue} className="navbar_logo" src={image.logo} alt="" />
      </Link>
      <div className="navbar_search">
        <AiOutlineSearch className="search_icon" />
        <input
          ref={inputRef}
          value={value}
          onChange={(e) => {
            getValue(e);
          }}
          type="text"
          className="search_input"
        />
      </div>
    </div>
  );
}

export default Navbar;
