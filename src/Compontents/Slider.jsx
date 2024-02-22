import React from "react";
import "../assets/SliderStyle.css";
import clear from "../assets/Clientes/clear.png";
import danone from "../assets/Clientes/danone.png";
import descarga from "../assets/Clientes/descarga.png";
import extru from "../assets/Clientes/extru.png";
import lalacteo from "../assets/Clientes/lalacteo.png";
import lavoz from "../assets/Clientes/lavoz.png";
import manfrey from "../assets/Clientes/manfrey.png";
import molto from "../assets/Clientes/molto.png";
import ppt from "../assets/Clientes/ppt.png";
import puntadelagua from "../assets/Clientes/puntadelagua.png";
import sanmiguel from "../assets/Clientes/sanmiguel.jpg";
import supercemento from "../assets/Clientes/supercemento.png";
import teknal from "../assets/Clientes/teknal.png";
import unionpel from "../assets/Clientes/unionpel.png";
import weg from "../assets/Clientes/weg.png";

function Slider() {
  const images = [
    clear,
    danone,
    descarga,
    extru,
    lalacteo,
    lavoz,
    manfrey,
    molto,
    ppt,
    puntadelagua,
    sanmiguel,
    supercemento,
    teknal,
    unionpel,
    weg,
    clear,
    danone,
    descarga,
    extru,
    lalacteo,
    lavoz,
    manfrey,
    molto,
    ppt,
    puntadelagua,
    sanmiguel,
    supercemento,
    teknal,
    unionpel,
    weg,
  ];

  return (
    <div className="slider">
      <span className="flex text-3xl justify-center items-center pb-10 font-bold">
        Ellos ya nos eligieron
      </span>
      <div className="slider-track">
        {images.map((image, index) => {
          return (
            <div className="slide" key={index}>
              <img src={image} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Slider;
