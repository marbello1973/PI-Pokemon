import React from "react";

function OrderAceDec() {
  return (
    <div>
      <div>
        <div>
          <label title="filter-type">Ordenamiento acc - dec</label>
        </div>
        <select>
          <option value="">Oredenar ascendente y descendente</option>
          <option value="api">Ascendente</option>
          <option value="bdd">Descendente</option>
        </select>
      </div>
    </div>
  );
}

export default OrderAceDec;
