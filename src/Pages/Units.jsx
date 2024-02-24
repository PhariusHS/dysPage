
import FlipCard from "../Compontents/FlipCard";
import Flota1 from "../assets/images/Flota1.jpg";

function Units() {
  return (
    <section className="min-h-screen bg-[#fff] flex flex-col mt-[26rem] md:mt-[20rem] xl:mt-12 mb-6 md:mb-24 xl:mb-10">
      <article className="flex md:flex-row flex-col justify-between items-center md:mb-10 md:mx-20">
        <h2 className="md:text-4xl text-3xl font-extrabold w-full">
          Llega a cualquier parte, <br /> con cualquier carga
        </h2>

        <span className="text-1xl mt-8 md:mt-4  md:max-w-80 md:mx-10 ">
          Asegura la entrega de tu carga en cualquier localidad con nuestras
          unidades, ofreciendo eficiencia y eficacia al alcance de tus manos.
        </span>
      </article>
      <article className="flex min-w-[75vw] flex-wrap items-center justify-center  md:mx-10">
        <FlipCard FrontImg={Flota1} title="Sider" />
        <FlipCard FrontImg={Flota1} title="Baranda volcable" />
        <FlipCard FrontImg={Flota1} title="Furgon" />
      </article>

      <span className="text-2xl font-semibold mb-8 md:mb-12 flex  justify-center items-center">
        Semis
      </span>

      <div className="relative flex py-10 ">
        <div className="flex-grow border-t-4 border-yellow-400 z-10"></div>
      </div>

      <article className="flex flex-wrap justify-center ">
        <FlipCard FrontImg={Flota1} title="Sider" />
        <FlipCard FrontImg={Flota1} title="Baranda volcable" />
      </article>

      <span className="text-2xl font-semibold mb-8 md:mb-12 flex  justify-center items-center">
        Chasis y acoplado
      </span>
    </section>
  );
}

export default Units;
