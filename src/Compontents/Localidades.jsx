import React from "react";
import { useState } from "react";

function Localidades() {
  const [provincias, setProvincias] = useState([]);
  const municipio = `https://apis.datos.gob.ar/georef/api/municipios?provincia=${provincias}&max=5`;

  function cargarProvincias() {
    fetch("https://apis.datos.gob.ar/georef/api/provincias")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.provincias[1].nombre);

        data.provincias.map((provincia, index) => {
          console.log(provincia.nombre);
          return (
            <select key={index}>
            <option  value={provincia.id}>
              {provincia.nombre}
            </option>
            </select>
          );
        });
      })
      .catch((error) => {
        console.error("Error fetching data", error);
      });
  }

  return (
    <label className="flex flex-col" onLoad={cargarProvincias}>



    </label>
  );
}

export default Localidades;
