import { createContext, useContext, useEffect, useState } from "react";
import CASider from "../assets/Camiones/CASider.png";
import CAVB from "../assets/Camiones/CAVB.png";
import Semifurgon from "../assets/Camiones/Semifurgon.png";
import Semisider from "../assets/Camiones/Semisider.png";
import SemiVB from "../assets/Camiones/SemiVB.png";



const MapperContext = createContext();
const APILink = "https://sheetdb.io/api/v1/2qspl7xw9kjwj";



export const useMapper = () => {
  const context = useContext(MapperContext);

  if (!context) {
    throw new Error("useMapper must be used within in a provider");
  }

  return context;
};

export function MapperProvider({ children }) {
  let images = [
    { url: CASider, name: "Acoplado sider" },
    { url: CAVB, name: "Acoplado varanda volcable" },
    { url: Semifurgon, name: "Semi furgon" },
    { url: Semisider, name: "Semi sider" },
    { url: SemiVB, name: "Semi varanda volcable" },
  ];

  const [value, setValue] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [submit, setSubmit] = useState(false);
  const [toneladas, setToneladas] = useState("");
  const [carga, setCarga] = useState("");

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;

    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;

    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const ClickHandler = (n) => {
    setValue(n);
  };

  useEffect(() => {

    if (toneladas != "" && carga != "") {

      setSubmit(true)

    }
   
  }, [toneladas, carga])
  
    


  const newPedido = () => {
    fetch(APILink, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: [
          {
            id: "INCREMENT",
            nombre: "Mark",
            camion: images[currentIndex].name,
            toneladas: toneladas,
            carga: carga,
            partida: "Cordoba",
            destino: "Misiones",
            numero: "3564686432",
            area: "+54",
          },
        ],
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  return (
    <MapperContext.Provider
      value={{
        ClickHandler,
        value,
        images,
        currentIndex,
        prevSlide,
        nextSlide,
        newPedido,
        setToneladas,
        setCarga,
        submit,
      }}
    >
      {children}
    </MapperContext.Provider>
  );
}
