import React from "react";
import "./RandomDog.css";

export default function RandomDog() {
  return (
    <div className="RandomDog">
      <h2 className="RandomDog-title">Random Dogs</h2>
      <img
        className="RandomDog-image"
        src="https://images.dog.ceo/breeds/airedale/n02096051_3538.jpg"
      />
      <p>
        <button className="RandomDog-button">Save Image</button>
        <button className="RandomDog-button">Next Dog</button>
      </p>
    </div>
  );
}
