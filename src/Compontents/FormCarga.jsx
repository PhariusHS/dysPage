import React from "react";
import { useMapper } from "../context/MapperContext";

function FormCarga() {

    const { setToneladas, setCarga  } = useMapper();

  return (
    <form className="py-16 mx-2" action="">
        <fieldset className="border-2 border-yellow-300 flex flex-col py-10 my-5 px-10">
        <legend className="font-bold text-xl">Marque el peso de su carga en toneladas</legend>
      <label>
        <input className="font-semibold my-2 " type="radio" name="radio" value="'-5'" onClick={e => {setToneladas(e.target.value); }} /> Menos de 5
      </label>
      <label>
        <input className="font-semibold my-2 " type="radio" name="radio" value="6-12" onClick={e => {setToneladas(e.target.value); }} /> 6 a 12
      </label>
      <label>
        <input className="font-semibold my-2 " type="radio" name="radio" value="13-18" onClick={e => {setToneladas(e.target.value); }} /> 13 a 18
      </label>
      <label>
        <input className="font-semibold my-2 " type="radio" name="radio" value="19-25" onClick={e => {setToneladas(e.target.value); }} /> 19 a 25
      </label>
      <label>
        <input className="font-semibold my-2 " type="radio" name="radio" value="26-28" onClick={e => {setToneladas(e.target.value); }} /> 26 a 28
      </label>
      <label>
        <input className="font-semibold my-2 " type="radio" name="radio" value="'+28'" onClick={e => {setToneladas(e.target.value); }} /> +28
      </label>

      <legend>¿Cual es el contenido de la carga?</legend>

        <input type="text" placeholder="Ej: Madera, Telgopor" className="border-2 rounded-lg border-black"  onChange={e => {setCarga(e.target.value);  }}/>

      </fieldset>
      
    </form>
  );
}

export default FormCarga;
