import React from "react";
import style from "./Paginado.module.css";

function Paginado({ pokePage, pokemon, paginado }) {
  const numeroPagina = [];
  for (let i = 1; i <= Math.ceil(pokemon / pokePage); i++) {
    numeroPagina.push(i);
  }
  return (
    <div className={style.container}>
      <ul className={style.ul}>
        {numeroPagina.map((numeroPag) => (
          <li className={style.li} key={numeroPag}>
            <button
              className={style.button}
              onClick={() => paginado(numeroPag)}
            >
              {numeroPag}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Paginado;
