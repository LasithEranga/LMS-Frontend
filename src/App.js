import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CourseCard from "./components/CourseCard";
import ourImage from "./assests/image.webp";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

function App() {
  const [data, setData] = useState([]);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    fetch("http://localhost:8085/api/v1/user/getAll", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [reload]);

  function onClickHandler() {
    let user = {
      id: null,
      name: "New Lasith",
      role: "student",
    };

    fetch("http://localhost:8085/api/v1/user/save", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
    setReload((prev) => !prev);
  }

  return (
    <div className="App d-flex flex-wrap">
      {data.map((user, index) => {
        return (
          <div>
            <CourseCard
              key={index}
              title={user.name}
              moduleCode={user.role}
              image={ourImage}
              textColor={
                user.name === "Lasith" ? "text-danger" : "text-primary"
              }
            />
            {user.name === "Lasith" ? (
              <Button onClick={onClickHandler}>Reload</Button>
            ) : (
              <Button onClick={onClickHandler}>Reset</Button>
            )}
          </div>
        );
      })}

      <Button onClick={onClickHandler}>Reload</Button>
      {reload && <Button onClick={onClickHandler}>Reset</Button>}
      {}
    </div>
  );
}

export default App;
