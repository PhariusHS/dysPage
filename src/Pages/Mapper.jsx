
import SwitcherButton from "../Compontents/SwitcherButton";
import { useMapper } from "../context/MapperContext";
import SliderUnities from "../Compontents/SliderUnities";
import FormCarga from "../Compontents/FormCarga";



function Mapper() {
  const { value, newPedido, submit } = useMapper();

  return (
    <section className="h-screen bg-[#F9FAFB] flex flex-col md:flex-row md:justify-center">
      <article className="flex flex-col items-center justify-center  mr-20">
        <span className="text-2xl">Mapeador</span>
        <h3 className=" max-w-[30rem]">
          {" "}
          <br /> Elegí las opciones que necesites, dejanos tu contacto y uno de
          nuestros profesionales se va a comunicar con vos para definir un
          presupuesto.
        </h3>
      </article>

      <article className="flex flex-col items-center justify-center mt-20 md:w-[70rem]">
        <SwitcherButton />
        {value === 1 && <SliderUnities />}

        {value != 1 && (
          <div className="h-[820px]">
            {value === 2 && <FormCarga/>}
            {value === 3 && <h1>S</h1>}
          </div>
        )}

        <button onClick={newPedido} disabled={submit ? false : true}>Guardar pedido</button>
      </article>
    </section>
  );
}

export default Mapper;
