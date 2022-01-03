import "./App.css";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          {/* <Route path="AddNewListItem" element={<AddNewListItem />} />
        <Route path="EditListItem" element={<EditListItem />} />
        <Route path="List" element={<List />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
