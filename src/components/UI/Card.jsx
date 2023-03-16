import React from "react";

const Card = ({ name, age }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">Name:{name}</h2>
        <p>Age:{age}</p>
      </div>
    </div>
  );
};

export default Card;
