import { showAlert } from "../reducers/alertSlice";
import { store } from "./store";

export const apiManager = (path, body, shouldAlert, method = "POST") => {
  let token = store.getState().login.token;
  console.log(token);

  return fetch(`${process.env.REACT_APP_BASE_URL}${path}`, {
    method: method,
    headers: {
      "Content-type": "application/json",
      ...(token && {
        Authorization: "Bearer " + token,
      }),
    },
    body: JSON.stringify(body),
  })
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      }
    })
    .then((data) => {
      console.log("alert");
      shouldAlert &&
        store.dispatch(
          showAlert({
            isVisible: true,
            message: data.message,
          })
        );
      return data;
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
