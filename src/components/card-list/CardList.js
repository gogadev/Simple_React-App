import React from "react";
import Card from "../card/Card";
import "./card-list.style.css";

const CardList = ({ monsters }) => {
  return (
    <div className="card-list">
    <div className="list">
    <div className="monsters">
      {monsters &&
        monsters.map((monster) => {
          return <Card key={monster.id} monster={monster} />;
        })}
    </div>
    </div>
    </div>
  );
};

export default CardList;
