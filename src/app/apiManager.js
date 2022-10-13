export const apiManager = (method = "POST", path, body) => {
  fetch(process.env.REACT_APP_BASE_URL + path, {
    method: method,
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        if (data.responseCode === "00") {
          //   setAlert({ message: data.message, isVisible: true });
          //TODO: gobal alert
          console.log(data);
        }
      }
    })
    .catch((error) => {
      console.log(error);
    });
};
