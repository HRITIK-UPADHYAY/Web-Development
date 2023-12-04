import { Route, Routes } from "react-router-dom";

//components.
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import DashBoard from "./Components/Dashboard";
import ImageUpload from "./Components/ImageUpload";

const App = () => {
  return (
    <div> 
      <ImageUpload />
      
      <Routes>
        <Route  path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<DashBoard />} />
      </Routes>
    </div>
  )
}

export default App;