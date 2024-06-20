import { useState } from "react";
import { LOGO_URL } from "../utils/contents";
import { useState } from "react";


const Header = () => {
  const [Btn, setBtn] = useState("Login");
  const toggle = () => {
    Btn == "Login" ? setBtn("Logout") : setBtn("Login");
  };

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact US</li>
          <li>Cart</li>
          <button onClick={toggle} className="toggle">
            {Btn}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
