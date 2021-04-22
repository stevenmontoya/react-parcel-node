import * as React from "react";
import axios from "axios";

const getUser = () => {
  const user = axios
    .get("http://localhost:3000/")
    .then((res) => {
      console.log("user ==> ", res.data);
    })
    .catch((err) => console.log("err ===> ", err));
};

const App = () => {
  return (
    <div>
      <h1>Hello world</h1>
      <button onClick={getUser}>get user</button>
    </div>
  );
};

export default App;
