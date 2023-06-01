import React, { useEffect, useState } from "react";
import axios from "axios";
import { Main } from "./Components/Main";


function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://superheroapi.com/api/773281124352189/search/batman"
        );
        let data = await response.json();
        setData(data.response);
      } catch (error) {
        console.error("Error fetching dog list:", error);
      }
    };
    fetchData();

    console.log(data);
  }, []);

  return (
    <>
      <Main />
    </>
  );
}

export default App;
