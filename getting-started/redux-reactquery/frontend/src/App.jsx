import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/HomePage";
import PublicNavbar from "./Templates/PublicNavbar";
import Login from "./Templates/Login";
import Register from "./Templates/Register";
import UserProfile from "./Templates/UserProfile";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Navbar /> */}
        <PublicNavbar />
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
