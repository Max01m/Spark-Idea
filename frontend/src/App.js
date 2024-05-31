import { Route, Routes } from "react-router-dom";
import "./App.css";
import Aboutus from "./pages/Aboutus/Aboutus";
import Main from "./pages/Main/Main";
import Profile from "./pages/Profile/Profile";
import Projects from "./pages/Projects/Projects";
import LogIn from "./pages/Registration and Login/LogIn";
import Registration from "./pages/Registration and Login/Registration";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/logIn" element={<LogIn />} />
        <Route path="/regis" element={<Registration />} />
        <Route path="/profile" element={<Profile />} />
   
      </Routes>
    </div>
  );
}

export default App;
