import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { Routes,Route } from "react-router-dom";

function App() {
  return (
    <>
   <Navbar/>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/skills" element={<Skills/>}/>
    <Route path="/projects" element={<Projects/>}/>
   </Routes>
    </>
  );
}

export default App;
