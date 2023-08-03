import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

import { auth } from "./firebase";

// ...

// import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
// import SearchIcon from "material-ui/icons/";

function NavBar() {
  const [{ basket, user }, dispatch] = useStateValue();

  const login = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <nav className="header">
      {/* Amazon Logo */}
      <Link to="">
        <img
          className="header_logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
        ></img>
      </Link>

      {/* Search Bar and Icon */}
      <div className="header_search_main">
        <input type="text" className="header_search"></input>
        {/* <SearchIcon className="header_searchicon"></SearchIcon> */}
        <img
          className="header_searchIcon"
          src="https://icon2.cleanpng.com/20180623/wvu/kisspng-computer-icons-desktop-wallpaper-search-box-materi-verification-5b2e87fc14d6f0.2412637115297761240854.jpg"
        ></img>
      </div>

      {/* Links */}
      <div className="header_links">
        <Link to="/login" className="header_link">
          <div onClick={login} className="header_option">
            <span className="header_optionLineOne">
              Hello {user}
              {/* Email */}
            </span>
            <span className="header_optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>

        <Link to="/login" className="header_link">
          <div className="header_option">
            <span className="header_optionLineOne">Returns</span>
            <span className="header_optionLineTwo">& Orders</span>
          </div>
        </Link>

        <Link to="/login" className="header_link">
          <div className="header_option">
            <span className="header_optionLineOne">Your</span>
            <span className="header_optionLineTwo">Prime </span>
          </div>
        </Link>

        <Link to="/checkout" className="header_link">
          <div className="header_optionBasket">
            <svg
              class="MuiSvgIcon-root"
              focusable="false"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M17.21 9l-4.38-6.56c-.19-.28-.51-.42-.83-.42-.32 0-.64.14-.83.43L6.79 9H2c-.55 0-1 .45-1 1 0 .09.01.18.04.27l2.54 9.27c.23.84 1 1.46 1.92 1.46h13c.92 0 1.69-.62 1.93-1.46l2.54-9.27L23 10c0-.55-.45-1-1-1h-4.79zM9 9l3-4.4L15 9H9zm3 8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"></path>
            </svg>
            <span className="header_optionLineTwo header_basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
