import logo from "./logo.svg";
import "./custom.scss";
import Registration from "./pages/Registration/Registration";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/sign-up" element={<Registration />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
