import { Route, BrowserRouter, Routes } from "react-router-dom";
import './App.css';
import Navbar from "./layout/Nav";
import Home from "./content/Home";
import MySkill from "./content/Skill";
import MyProject from "./content/Project"


function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Navbar className="navbar" />
      <Routes>
        <Route path="/" element={<Home />}/> 
        <Route path="/skill" element={<MySkill />}/> 
        <Route path="/project" element={<MyProject />}/> 


      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
