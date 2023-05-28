import React from "react";

function Filterorigin() {
  return (
    <div>
      <div>
        <label title="filter-type">Filtrar por origen api o bdd</label>
      </div>
      <div>
        <select>
          <option value="">Filtra por origen</option>
          <option value="api">Api</option>
          <option value="bdd">Base de datos</option>
        </select>
      </div>
    </div>
  );
}

export default Filterorigin;
