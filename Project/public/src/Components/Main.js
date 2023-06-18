import React from "react";
import { Card } from "./Card";
import axios from "axios";
import { useState, useEffect } from "react";

export const Main = () => {
  const [url, setUrl] = useState(
    // URL for fetching superhero data
    "https://akabab.github.io/superhero-api/api/all.json"
  );
  const [item, setItem] = useState([]); // Declare 'item' state variable

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url); // Fetch data from the specified URL
        setItem(response.data); // Update 'item' state with the fetched data
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // Call the fetchData function
  }, [url]);

  return (
    <>
      <div className="banner">
        <h1 id="title">SuperHeroes & Villains Library</h1>
      </div>
      <div className="content">
        {!item ? (
          <p>Not Found</p> // Render "Not Found" if item data is not available
        ) : (
          <Card data={item} /> // Render the Card component with the item data
        )}
      </div>
    </>
  );
};
