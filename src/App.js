import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddConference from "./component/AddConference";
import EditConference from "./component/EditConference";
import Conferences from "./component/Conferences";
import { Navbar } from "./component/Navbar";
import Sidebar from "./component/Sidebar";
import AboutPage from "./component/AboutPage"; 
import HomePage from "./component/HomePage"; 

function App() {
  return (
    <>
      <Navbar />
        <div className="Page">
        <div className="App">
          <Sidebar />
        </div>
        <div className="Routes">
          <Routes>
            <Route path="/conferences" element={<Conferences />} />
            <Route path="/addConference" element={<AddConference />} />
            <Route path="/editConference/:id" element={<EditConference />} />
            <Route path="/about" element={<AboutPage />} /> 
            <Route path="/home" element={<HomePage />} /> 
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
