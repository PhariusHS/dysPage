import React from "react";
import { useMapper } from "../context/MapperContext";
import Localidades from "./Localidades";

function FormCarga() {
  const { setNombre, setArea, setNumero,setEmail } = useMapper();

  return (
    <form className="py-16 mx-2" action="">
      <fieldset className="border-4 border-yellow-300 flex flex-col py-10 my-5 px-10 h-[26rem] w-[26rem]">
        
        <span className="font-bold flex justify-center text-xl">Datos de contacto:</span>
        <div>
          <div className="flex flex-row my-5 items-center justify-center">
            <label className="flex flex-col items-center justify-center">
              Cod. País
              <input
              onChange={(e) => {setArea(e.target.value)}}
                type="text"
                placeholder="+54"
                className="border border-gray-800 mx-1 max-w-10"
              />
            </label>
            <label className="flex flex-col items-center justify-center">
              Numero de celular
              <input
                onChange={(e) => {setNumero(e.target.value)}}
                type="tel"
                placeholder="1111 111111"
                id="phone"
                name="phone"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                className="border border-gray-800 mx-1"
              />
            </label>
          </div>
        </div>

        <label className="my-5">
          Email
          <input
            type="email"
            id="email"
            pattern=".+@example\.com"
            size="30"
            placeholder=" juanperez@gmail.com"
            className="border mx-2  border-black"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </label>

        <span className="my-5 font-bold flex justify-center">¿Con quien nos comunicamos?</span>

        <input
          type="text"
          placeholder=" EJ: Juan Perez, Distribuidora SRL "
          className="border  border-black flex justify-center"
          onChange={(e) => {
            setNombre(e.target.value);
          }}
        />

      </fieldset>
    </form>
  );
}

export default FormCarga;
