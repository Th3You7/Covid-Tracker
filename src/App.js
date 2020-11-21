import React, { useEffect, useState } from "react";
import { Cards, Loading, Navbar } from "./components";
import fetchApi from "./api/fetchApi";
import app from "./app.module.css";

const App = () => {
  let [details, setDetails] = useState(undefined);

  useEffect(() => {
    const getDetails = async () => {
      setDetails(await fetchApi());
    };
    getDetails();
  }, []);

  if (details === undefined) {
    return (
      <div className={app.container}>
        <Loading />
      </div>
    );
  }

  return (
    <div className={app.container}>
      <Navbar />
      <Cards details={details} />
    </div>
  );
};

export default App;
