import { useState } from "react";
import "./App.css";
import useResource from "./Hooks/useResource";
import axios from "axios";
import useDataSource from "./Hooks/useDataSource";

const getdata = (url) => {
  return axios.get(url);
};

function App() {
  const user = useDataSource(() =>
    getdata(`https://jsonplaceholder.typicode.com/posts`)
  );

  console.log(user);

  return <></>;
}

export default App;
