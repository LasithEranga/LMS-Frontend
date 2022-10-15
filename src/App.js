import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import store from "./app/store";
import Sidebar from "./components/Sidebar/Sidebar";
import "./custom.scss";
import Dashboard from "./pages/Dashboard/Dashboard";
import Registration from "./pages/Registration/Registration";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/sign-up" element={<Registration />} />

            <Route path="/" element={<Sidebar />}>
              <Route path="/dashboard" element={<Dashboard />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
