import React from "react";
import { useNavigate } from "react-router-dom";

export const Card = ({ data }) => {
  let navigate = useNavigate();

  return (
    <>
      {
        data // Check if data is available
          ? data.map((item) => {
              // Iterate over each item in data array
              return (
                <div
                  className="card"
                  key={item.id}
                  onClick={() => navigate(`/${item.id}`)}
                >
                  <img src={`${item.images.sm}`} alt={item.name} />{" "}
                  {/* alt attribute for accessibility */}
                  <div className="card-title">
                    <h3>{item.name}</h3>
                  </div>
                </div>
              );
            })
          : "" // If data is not available, render an empty string
      }
    </>
  );
};
