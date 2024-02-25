import { useState, useEffect } from "react";

function Localidades() {
  const [provincias, setProvincias] = useState([]);
  const [selectedProvincia, setSelectedProvincia] = useState("");
  const [localidades, setLocalidades] = useState([]);
  const provinciasAPI = "https://apis.datos.gob.ar/georef/api/provincias";

  useEffect(() => {
    cargarProvincias();
  }, []);

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

  function handleProvinciaChange(event) {
    const provinciaSeleccionada = event.target.value;
    setSelectedProvincia(provinciaSeleccionada);
  }

  useEffect(() => {
    if (selectedProvincia !== "") {
      fetch(`https://apis.datos.gob.ar/georef/api/localidades?provincia=${selectedProvincia}`)
        .then((res) => res.json())
        .then((data) => {
          setLocalidades(data.localidades);
        })
        .catch((error) => {
          console.error("Error fetching localidades", error);
        });
    }
  }, [selectedProvincia]);

  return (
    <div>
      <label>
        Seleccione provincia
        <select value={selectedProvincia} onChange={handleProvinciaChange}>
          <option value="">Seleccione una provincia</option>
          {provincias.map((provincia, index) => (
            <option key={index} value={provincia.nombre}>
              {provincia.nombre}
            </option>
          ))}
        </select>
      </label>

      {selectedProvincia && (
        <label>
          Seleccione localidad
          <select>
            <option value="">Seleccione una localidad</option>
            {localidades.map((localidad, index) => (
              <option key={index} value={localidad.nombre}>
                {localidad.nombre}
              </option>
            ))}
          </select>
        </label>
      )}
    </div>
  );
}

export default Localidades;
