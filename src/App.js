import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Form from "./components/Form";
import Api from "./components/Api";
import Ecommerce from "./components/Ecommerce";


function App() {
  return (
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/form" element={<Form/>}/>
    <Route path="/api" element={<Api/>}/>
    <Route path="/ecommerce" element={<Ecommerce/>}/>
    </Routes>
  );
}

export default App;
