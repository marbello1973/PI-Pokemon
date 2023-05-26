import React from "react";

function OrderAceDec() {
  return (
    <div>
      <div>
        <div>
          <label htmlFor="filter-type">Ordenamiento</label>
        </div>
        <select for="filter-type">
          <option value="">Oredenar ascendente y descendente</option>
          <option value="api">Ascendente</option>
          <option value="bdd">Descendente</option>
        </select>
      </div>
    </div>
  );
}

export default OrderAceDec;
