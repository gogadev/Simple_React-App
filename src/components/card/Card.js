import React from "react";
import "./card.style.css";

const Card = ({ monster }) => {
  return (
    <div className="card">
      <div className="info">
        <div className="monster">
          <h2 className="name">{monster.name}</h2>
          <h3 className="email">Email: {monster.email}</h3>
          <img
            alt="monster"
            src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}
          />
          <h4 className="city">City: {monster.address.city}</h4>
          <h4 className="company">Company: {monster.company.name}</h4>
        </div>
      </div>
    </div>
  );
};

export default Card;
