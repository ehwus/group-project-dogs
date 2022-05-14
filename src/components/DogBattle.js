import React from "react";
import Dog from "./Dog.js";
import "./DogBattle.css";

export default function DogBattle(props) {
  return (
    <div className="DogBattle">
      <h2 className="DogBattle-title">Choose the best dog</h2>
      <div className="DogBattle-images">
        <Dog image={props.bestDogImage[0]} />
        <Dog image={props.bestDogImage[1]} />
      </div>
    </div>
  );
}
