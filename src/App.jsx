import {Routes, Route } from "react-router-dom";
const App = () => {

  return (
    <div id="container">
      <div id="navbar">{/* navigation here */}</div>
      <div id="main-section">
        <Routes>
          <Route path="/blue" element={<h1>Blue</h1>}></Route>
          <Route path="/red" element={<h1>Red</h1>}></Route>
        </Routes>
      </div>
    </div>
  )
}

export default App
