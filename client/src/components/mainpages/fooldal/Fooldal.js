import React from "react";
import "./Fooldal.css";
import { Link } from "react-router-dom";
// import { DataProvider } from "./GlobalState";
// import Header from "./components/headers/Header";
// import MainPages from "./components/mainpages/Pages";

function Fooldal() {
  return (
    <>
      {/* <Link to="/kezdo">Kezdőlap</Link> */}
      <div>
          <div className="onkentes">
            <div className="szoveg">
             <h1>Legyél te is önkéntes!</h1> <h2>Csatlakozz hozzánk, így minél több kisállat életét szebbé varázsolhatod!</h2><h2>További tudnivalókért kérjük kattintson az alábbi gombra.</h2>
             <a href="https://www.facebook.com/F%C3%BCrge-L%C3%A1bak-%C3%81llatmenhely-101968349148902"><button className="button" >További információk</button></a>
             </div>
          </div>

          <img src="kutya.png" alt="kutya" style={{marginRight:"10px", width: "630px", height:"590px", float:"right", borderRadius:"20px"}}/>

      </div>
        <table className="kepek">
        <tr>
          <th className="logok"><img src="phone-call.png" alt="hivas"></img></th>
          <th className="hatterszin">06306485393</th>
        </tr>
        <tr>
          <th className="logok"><img src="email.png" alt="email"></img></th>
          <th className="hatterszin"><p>furgelabakallatmenhely@gmail.com</p></th>
        </tr>
      </table>
    </>
  );
}

export default Fooldal;


