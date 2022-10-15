import logo from "./logo.svg";
import "./custom.scss";
import Registration from "./pages/Registration/Registration";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./app/store";
import Dashboard from "./pages/Dashboard/Dashboard";
import GradeView from "./pages/GradeView/GradeView";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/sign-up" element={<Registration />} />
            <Route path="/" element={<Dashboard />} />
            <Route path="/grades" element={<GradeView />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
