import { showAlert } from "../reducers/alertSlice";
import store from "./store";

export const apiManager = (path, body, shouldAlert, method = "POST") => {
  fetch(process.env.REACT_APP_BASE_URL + path, {
    method: method,
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then((response) => {
      console.log(response);
      if (response.status === 200) {
        //   setAlert({ message: data.message, isVisible: true });
        //TODO: gobal alert
        let data = response.json();
        console.log(data);
        shouldAlert &&
          store.dispatch(
            showAlert({
              isVisible: true,
              message: data.message,
            })
          );
        return data;
      }
    })

    .catch((error) => {
      store.dispatch(
        showAlert({
          isVisible: true,
          message: "Somthing went wrong",
        })
      );
    });
};
