import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddConference from "./component/AddConference";
import EditConference from "./component/EditConference";
import Conferences from "./component/Conferences";
import { Navbar } from "./component/Navbar";

function App() {
  return (
    <>
      <Navbar />

      <div className="Page">
        <div className="App">
          {/* <Sidebar/> */}
          </div>
        <div className="Routes">
          <Routes>
            <Route path="/" element={<Conferences />}></Route>
            <Route path="/addConference" element={<AddConference />}></Route>
            <Route
              path="/editConference/:id"
              element={<EditConference />} 
            ></Route>
          </Routes>

        </div>
      </div>
    </>
  );
}

export default App;
