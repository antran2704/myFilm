import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
import image from "../../assets/imgs";
import "./Navbar.scss";
function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">
        <img className="navbar_logo" src={image.logo} alt="" />
      </Link>
      <div className="navbar_search">
        <AiOutlineSearch className="search_icon" />
        <input type="text" className="search_input" />
      </div>
    </div>
  );
}

export default Navbar;
