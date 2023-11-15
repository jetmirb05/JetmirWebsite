import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Departaments from "./pages/Departaments/Departaments";
import Contact from "./pages/Contact";
import MiningDep from "./pages/Departaments/MiningDep";
import { Footer } from "./components/Footer"
import ConstructionDep from "./pages/Departaments/ConstructionDep";
import RenewableEnergy from "./pages/Departaments/RenewableEnergyDep";
import StaffPage from "./pages/StaffPage";
import News from "./components/News";
import ConsultingDep from "./pages/Departaments/ConsultingDep";
function App() {
  
  return (
    <>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Departments" element={<Departaments />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/MiningDep" element={<MiningDep />} />
      <Route path="/ConstructionDep" element={<ConstructionDep />} />
      <Route path="/RenewableEnergyDep" element={<RenewableEnergy />} />
      <Route path="/ConsultingDep" element={<ConsultingDep />} />
      <Route path="/Contact" element={<Contact/>} /> 
      <Route path="/StaffPage" element={<StaffPage/>} /> 
      <Route path="/News" element={<News/>} />
    </Routes>

    <Footer/>

    </>

  )
}

export default App;