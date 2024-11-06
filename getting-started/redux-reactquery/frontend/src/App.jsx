import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/HomePage";
import PublicNavbar from "./Templates/PublicNavbar";
import Login from "./Templates/Login";
import {useSelector} from "react-redux";
import Register from "./Templates/Register";
import UserProfile from "./Templates/UserProfile";
import PrivateNavbar from "./components/PrivateNavbar";

function App() {
const userData = useSelector((state)=>(state?.auth?.user));
  return (
    <>
      <BrowserRouter>
        {/* <Navbar /> */}
        
        {userData? <PrivateNavbar /> : <PublicNavbar />}
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<UserProfile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
