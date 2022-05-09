import React, { useEffect, useState } from "react";
import "./RandomDog.css";

export default function RandomDog(props) {  /* RandomDog */
  
    return (
      <div className="RandomDog">
        <h2 className="RandomDog-title">Random Dogs</h2>
        {/* <img className="RandomDog-image" src="http://via.placeholder.com/300x300" /> */}        
        {props.dogImage && <img className="RandomDog-image" src={props.dogImage} alt="an image of a dog" ></img>} {/* new images (breed) */}
        <p>


  {/* Save Image  ~   button */}
        <button className="RandomDog-button" 
          onClick={() =>props.handSavedImage()}
          >Save Image
            </button>


 {/* RandomDog-image  ~  button */}          
          <button className="RandomDog-button"
              onClick={() => props.handleNextImage()}>
              Next Dog
          </button>

        </p>
      </div>
    )}



