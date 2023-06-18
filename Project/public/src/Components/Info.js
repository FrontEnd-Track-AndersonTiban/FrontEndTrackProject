import React from "react";
import axios from "axios"; // Import axios for making HTTP requests
import { useState, useEffect } from "react"; // Import useState and useEffect hooks
import { useParams } from "react-router-dom";

export const Info = () => {
  const { id } = useParams(); // Access the 'id' parameter from the route URL
  const [character, setCharacter] = useState(); // Declare 'character' state variable

  useEffect(() => {
    // Use useEffect to fetch the character data when the component mounts
    const fetchCharacter = async () => {
      try {
        const response = await axios.get(
          `https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/${id}.json`
        );
        setCharacter(response.data); // Update 'character' state with the fetched data
      } catch (error) {
        console.error("Error fetching character:", error);
      }
    };

    fetchCharacter(); // Call the fetchCharacter function
  }, [id]); // Include 'id' as a dependency to refetch character data when it changes

  return (
    <>
      {!character ? (
        "" // Render an empty string if character data is not available yet
      ) : (
        <div className="info-content">
          <div className="right-box">
            <img
              className="info-img"
              src={`${character.images.lg}`}
              alt={character.name}
            />
          </div>
          <div className="left-box">
            <h1>{character.name}</h1>
            <h2>Stats</h2>
            <p>Intelligence: {character.powerstats.intelligence}</p>
            <p>Strength: {character.powerstats.strength}</p>
            <p>Speed: {character.powerstats.speed}</p>
            <p>Power: {character.powerstats.power}</p>
          </div>
        </div>
      )}
    </>
  );
};
