import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import store from "./app/store";
import "./custom.scss";
import Dashboard from "./pages/Dashboard/Dashboard";
import Sidebar from "./components/Sidebar/Sidebar";
import Registration from "./pages/Registration/Registration";
import GradeView from "./pages/GradeView/GradeView";
import CourseEvaluation from "./pages/CourseEvaluation/CourseEvaluation";
import Login from "./pages/Login/Login";
import CourseView from "./components/CourseView/CourseView";
import Profile from "./pages/Profile/Profile";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/sign-up" element={<Registration />} />

            <Route path="/" element={<Sidebar />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/grades" element={<GradeView />} />
              <Route path="/course-view" element={<CourseView />} />
              <Route path="/course-evaluation" element={<CourseEvaluation />} />
              <Route path="/profile" element={<Profile />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
