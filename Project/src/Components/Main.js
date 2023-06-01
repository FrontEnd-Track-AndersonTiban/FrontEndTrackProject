import React from "react";
import { Card } from "./Card";

export const Main = () => {
    

  return (
    <>
      <div className="header">
        <div className="bg">
          <img src="https://project-nerd.com/wp-content/uploads/2013/09/Marvel-Comics-Character-Banner.jpg" />
        </div>
        <div className="search-bar">
          <input
            type="search"
            placeholder="search here"
            className="search"
          ></input>
        </div>
      </div>

      <div className="content">
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
};
