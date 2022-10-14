import logo from "./logo.svg";
import "./custom.scss";
import Registration from "./pages/Registration/Registration";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./app/store";
import Dashboard from "./pages/Dashboard/Dashboard";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/sign-up" element={<Registration />} />
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
