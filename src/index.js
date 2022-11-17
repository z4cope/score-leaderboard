import "./style.css";
import MarkupGenerator from "./modules/markupGenerator.js";

const apiUrl =
  "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/HvAzJsiK5mUsgDCjT2Ro/scores";

const postMethod = async (url = "", data = {}) => {
  const response = await fetch(url, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-type": "application/json",
    },
    redirect: "follow",
    body: JSON.stringify(data),
  });
  console.log(response.json());
};

const getMethod = async (url = "") => {
  const response = await fetch(url);

  console.log(await response.json());
};

getMethod(apiUrl);

MarkupGenerator.generator();
