import Layout from "./pages/Layout";
import Home from './pages/Home.js';
import Product from './pages/Product';
import Contact from './pages/Contact';
import MainProduct from "./pages/MainProduct";
import Formsale from "./pages/Formsale";
import About from "./pages/About";
import Login from "./pages/Login";
import Purchase from "./pages/Purchase";
import Profile from "./pages/Profile";
import Formregister from "./pages/Formregister";
import FormProduct from "./pages/FormProduct";
import Status_check from "./pages/Status_check";
import StartRegister from "./components/StartRegister";
import { BrowserRouter ,NavLink,Routes,Route } from 'react-router-dom';
import FormUploadimage from "./pages/FormUploadimage";
import FinallyPage from "./pages/FinallyPage";
import FormStaff from "./pages/FormStaff";
import EmployeeList from "./pages/EmployeeList";
import Tests from "./pages/Tests";
import Testfile from "./pages/Testfile.js";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
function App() {
  return (
    <Routes>
      <Route exact path={"/EmployeeList"} element={<EmployeeList />} />
      <Route  exact path={"/Product"} element={<Product/>} />
    <Route exact path={"/Login"} element={<Login />} />
    <Route  path={"/"} element={<Home />} />
    <Route  path={"/Home"} element={<Home />} />
    <Route  path={"/Contact"} element={<Contact/>} />
    <Route  path={"/MainProduct"} element={<MainProduct/>} />
    <Route  path={"/Formsale"} element={<Formsale/>} />
    <Route  path={"/Formsale"} element={<Formsale/>} />
    <Route  path={"/Formregister"} element={<Formregister/>} />
    <Route  path={"/Contact"} element={<Contact/>} />
    <Route  path={"/Purchase"} element={<Purchase/>} />
    <Route  path={"/Profile"} element={<Profile/>} />
    <Route  path={"/FormProduct"} element={<FormProduct/>} />
    <Route  path={"/Status_check"} element={<Status_check/>} />
    <Route  path={"/StartRegister"} element={<StartRegister/>} />
    <Route  path={"/FormUploadimage"} element={<FormUploadimage/>} />
    <Route  path={"/FinallyPage"} element={<FinallyPage/>} />
    <Route  path={"/FormStaff"} element={<FormStaff/>} />
    <Route  path={"/Tests"} element={<Tests/>} />
    <Route  path={"/About"} element={<About/>} />
    <Route  path={"/Testfile"} element={<Testfile/>} />
    </Routes>
  );
}

export default App;
