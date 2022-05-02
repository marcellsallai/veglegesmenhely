import React, { useContext, useState } from "react";
import { GlobalState } from "../../GlobalState";
import Menu from "./icon/menu.svg";
import Close from "./icon/close.svg";
import Paw from "./icon/pawprint 1.png";
// import Cart from './icon/cart.svg'
import NewCart from "./icon/newcart.svg";
import { Link } from "react-router-dom";
import axios from "axios";
import "./header.css";

function Header() {
  const state = useContext(GlobalState);
  const [isLogged] = state.userAPI.isLogged;
  const [isAdmin] = state.userAPI.isAdmin;
  const [cart] = state.userAPI.cart;
  const [menu, setMenu] = useState(false);

  const logoutUser = async () => {
    await axios.get("/user/logout");

    localStorage.removeItem("firstLogin");

    window.location.href = "/";
  };

  const adminRouter = () => {
    return (
      <>
        <li>
          <Link to="/create_product">Hozzáadás</Link>
        </li>
        <li>
          <Link to="/category">Kategóriák</Link>
        </li>
      </>
    );
  };

  const loggedRouter = () => {
    return (
      <>
        {/* <li><Link to="/fooldal">Kezdőlap</Link></li> */}
        <li>
          <Link to="/kezdo">Állataink</Link>
        </li>
        <li>
          <Link to="/history">Örökbefogadás</Link>
        </li>
        <li>
          <Link to="/contact">Elérhetőségeink</Link>
        </li>
        <li>
          <Link to="/" onClick={logoutUser}>
            Kilépés
          </Link>
        </li>
      </>
    );
  };

  const styleMenu = {
    left: menu ? 0 : "-100%",
  };

  return (
    <header>
      <div className="menu" onClick={() => setMenu(!menu)}>
        <img src={Menu} alt="" width="30" />
      </div>

      <div className="logo">
        <Link to="/fooldal">
        <img
          src={Paw}
          alt="kép"
          style={{ width: "auto", height: "60px", marginBottom: "5px" }}
        />
        </Link>
        {isAdmin ? (
          <Link to="/fooldal">
            <h1 style={{ fontFamily: "Wellfleet", textIndent: "15px" }}>
              Admin
            </h1>
          </Link>
        ) : (
          <Link to="/fooldal">
            <h1 style={{ fontFamily: "Wellfleet", textIndent: "15px" }}>
              Fürge lábak <br />
              állatmenhely
            </h1>
          </Link>
        )}
        {/* <Link to="/"><p>{isAdmin ? 'Admin' : 'Fürge lábak állatmenhelyek'}</p></Link> */}
      </div>

      <ul style={styleMenu}>

        {isAdmin && adminRouter()}

        {isLogged ? (
          loggedRouter()
        ) : (
          <li>
            <Link to="/login">Bejelentkezés ✥ Regisztráció</Link>
          </li>
        )}

        <li onClick={() => setMenu(!menu)}>
          <img src={Close} alt="" width="30" className="menu" />
        </li>
      </ul>

      {isAdmin ? (
        ""
      ) : (
        <div className="cart-icon">
          <span>{cart.length}</span>
          <Link to="/cart">
            <img src={NewCart} alt="" width="30" />
          </Link>
        </div>
      )}
    </header>
  );
}

export default Header;
