import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { API } from "../Config/api";
import { Link } from "react-router-dom";

import "./header.css";

// //context
// import { AppContext } from "../Context/globalContext";
// import { CartContext } from "../Context/cartContext";

// import LoginComponent from "../Components/LoginComp";
// import SignUp from "../Components/SignUpComp";

// // import icon from "../Icon/Icon.png";
// // import cartLogo from "../Icon/cartLogo.svg";
// // import logout from "../Icon/logout.svg";
// // import profilePic from "../Icon/ProfilePic.png";
// import profileIcon from "../Icon/profileIcon.svg";

const Header = () => {
  // const cart = useContext(CartContext);
  // const app = useContext(AppContext);

  // const cartState = cart[0];
  // const cartDispatch = cart[1];

  // const appState = app[0];
  // const appDispatch = app[1];

  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const showingModalLogin = () => setShowLogin(true);

  const closingModalLogin = () => setShowLogin(false);

  const showingModalRegister = () => setShowRegister(true);

  const closingModalRegister = () => setShowRegister(false);

  const goProfile = () => {
    history.push(`/profile`);
  };
  const goHome = () => {
    history.push(`/`);
  };
  return <div className="navbarContainer"></div>;
};

export default Header;
