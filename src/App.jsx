import Slider from "./Compontents/Slider";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Mapper from "./Pages/Mapper";
import Units from "./Pages/Units";
import Usself from "./Pages/Usself";
import {MapperProvider} from "./context/MapperContext";

function App() {
  return (
    <MapperProvider>
      <Home />
      <About />

      <Slider />

      <Usself />

      <Units />

      <Mapper />
    </MapperProvider>
  );
}

export default App;
