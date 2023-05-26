import React from "react";

function OrderAlfabetico() {
  return (
    <div>
      <div>
        <div>
          <label htmlFor="filter-type">Ordenamiento alfabetico</label>
        </div>
        <select for="filter-type">
          <option value="">Oreden alfabetico</option>
          <option value="api">A-Z</option>
          <option value="bdd">Z-A</option>
        </select>
      </div>
    </div>
  );
}

export default OrderAlfabetico;
