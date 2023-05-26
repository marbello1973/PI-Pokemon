import React from "react";

function Filtertype() {
  return (
    <div>
      <div>
        <label htmlFor="filter-type">Filtrar por typo</label>
      </div>
      <div>
        <select for="filter-type">
          <option value="">Filtra por typo</option>
          <option value="">fighting</option>
          <option value="">flying</option>
          <option value="">normal</option>
          <option value="">poison</option>
          <option value="">ground</option>
          <option value="">rock</option>
          <option value="">ghost</option>
          <option value="">bug</option>
          <option value="">steel</option>
          <option value="">fire</option>
          <option value="">water</option>
          <option value="">grass</option>
          <option value="">electric</option>
          <option value="">psychic</option>
          <option value="">ice</option>
          <option value="">dark</option>
          <option value="">dragon</option>
          <option value="">fairy</option>
          <option value="">unknown</option>
          <option value="">shadow</option>
        </select>
      </div>
    </div>
  );
}

export default Filtertype;
