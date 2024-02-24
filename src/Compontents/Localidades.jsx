import { useState, useEffect } from "react";

function Localidades() {
  const [provincias, setProvincias] = useState([]);
  const [municipios, setMunicipios] = useState([]);
  const municipioAPI = `https://apis.datos.gob.ar/georef/api/localidades?provincia=${provincias}`;
  const provinciasAPI = "https://apis.datos.gob.ar/georef/api/provincias";

  useEffect(() => {
    cargarProvincias();
  }, []); // Solo se ejecutará una vez al montar el componente

  useEffect(() => {
    cargarMunicipio();
  }, [provincias]);

  function cargarProvincias() {
    fetch(provinciasAPI)
      .then((res) => res.json())
      .then((data) => {
        setProvincias(data.provincias);
      })
      .catch((error) => {
        console.error("Error fetching data", error);
      });
  }

  function cargarMunicipio() {
    fetch(municipioAPI)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        console.log("Provincias",provincias)
      })
      .catch((error) => {
        console.error("Error fetching data", error);
      });
  }

  return (
    <label className="flex flex-col">
      Seleccione provincia
      <select>
        {provincias.map((provincia, index) => (
          <option key={index} value={provincia.id}>
            {provincia.nombre}
          </option>
        ))}
      </select>
    </label>
  );
}
export default Localidades;
