import React from "react";

function Orderattack() {
  return (
    <div>
      Orderattack
      <div>
        <div>
          <label title="filter-type">Ordenamiento por ataque</label>
        </div>
        <select>
          <option value="">Oreden ataque</option>
          <option value="api">Attack maximo</option>
          <option value="bdd">Attack minimo</option>
        </select>
      </div>
    </div>
  );
}

export default Orderattack;
