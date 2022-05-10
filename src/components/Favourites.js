import React from "react";
import "./Favourites.css";

export default function Favourites(props) {
  return (
    <div className="Favourites">
      <div className="Favourites-breeds">
        <h2>Favourite Breeds</h2>
        <p>???</p>
        <p>???</p>
      </div>

      {/* 3 saved image ------------------------------------- */}
      <div className="Favourites-saved">
        <h2>Saved Photos</h2>
        <div className="Favourites-photos">
          <img src={props.savedPhotos} alt="an image of a dog"/>
          {/* <img src={props.secondSavedImage} alt="an image of a dog"/> */}
          <img src="http://via.placeholder.com/80x80" />
        </div>
      </div>
    </div>
  );
}
 

{/* {savedPhotos && <img  className="Favourites-photos src={props.savedPhotos} alt="an image of a dog"/>} */}
// {dogImage && <img className="Breeds-image" src={dogImage} alt="an image of a dog" ></img>} {/* new images (breed)  */}      
