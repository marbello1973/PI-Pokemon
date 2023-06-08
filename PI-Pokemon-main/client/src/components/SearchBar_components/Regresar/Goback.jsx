import React from "react";
import { Link } from "react-router-dom";
import style from "./Goback.module.css";

function Goback() {
  return (
    <div>
      <Link to={`/home/`}>
        <button className={style.buton}>Go-back</button>
      </Link>
    </div>
  );
}

export default Goback;
