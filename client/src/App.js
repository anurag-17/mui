import "./App.css";
import { Carddeower } from "./Component/Carddeower";
import { Footer } from "./Component/Footer";
import { Nav } from "./Component/Nav";
import {Schedule}  from "./Component/Schedule";
import { Scroll } from "./Component/Scroll";
import { Tabss } from "./Component/Tabs";
function App() {
  return (
    <div className="app">
      <Nav />
      <Scroll/>
      <Tabss/>
      <Carddeower/>
      <Schedule/>
      <Footer/>
    </div>
  );
}

export default App;
