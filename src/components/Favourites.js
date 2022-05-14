import React from "react";
import "./Favourites.css";

export default function Favourites(props) {
//  console.log("props",props) 
  return (
    <div className="Favourites">
      <div className="Favourites-breeds">
        <h2>Favourite Breeds</h2>
        <p>???</p>
        <p>???</p>
      </div>
      <div className="Favourites-saved">
        <h2>Saved Photos</h2>
        <div className="Favourites-photos">
          <img src={props.savedPhotos[0]}/>
          <img src={props.savedPhotos[1]} />
        </div>
      </div>
    </div>
  );
}
