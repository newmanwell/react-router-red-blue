import {Routes, Route, Link } from "react-router-dom";

import Blue from "./Blue";
import Red from "./Red";

const App = () => {

  return (
    <div id="container">
      <div id="navbar">
        <Link to="/blue">Blue</Link>
        <Link to="/red">Red</Link>
      </div>
      <div id="main-section">
        <Routes>
          <Route path="/blue" element={<Blue />}></Route>
          <Route path="/red" element={<Red />}></Route>
        </Routes>
      </div>
    </div>
  )
}

export default App
