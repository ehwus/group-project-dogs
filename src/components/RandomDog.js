import React from "react";
import "./RandomDog.css";

function RandomDog(props) {
  
  // {
  //     "message": "https://images.dog.ceo/breeds/hound-ibizan/n02091244_4281.jpg",
  //     "status": "success"
  // }

console.log("props",props)

  return (
    <div className="RandomDog">
      <h2 className="RandomDog-title">Random Dogs</h2>
      <img className="RandomDog-image" src={props.randomDogImage} />
      <p>
        <button onClick={props.savePhotos} className="RandomDog-button">
          Save Image
        </button>
        <button onClick={() => props.handleNextImage()} className="RandomDog-button">
          Next Dog
        </button>
      </p>
    </div>
  );
}

export default RandomDog;
