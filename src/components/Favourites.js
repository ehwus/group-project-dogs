import React from "react";
import "./Favourites.css";


export default function Favourites(props) {

  // gets the placeholder if there is no image
  const getPlaceHolder = (num) => {
    return props.savedPhotos[num] !=undefined ?
    //image for first load 
    props.savedPhotos[num]: "./80x80_trans.png"
  }
  

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
        {/* using the spread operator to copy the array App.js */}
        
        {/* ternary operator to get placeholder image - option 2 */}
          <img src={getPlaceHolder(0)} alt="an image of a dog"/>
          <img src={getPlaceHolder(1)} alt="an image of a dog"/>
          <img src={getPlaceHolder(2)} alt="an image of a dog"/>
          <img src={getPlaceHolder(3)} alt="an image of a dog"/>
          {/* additional images - option 1  */}
          {/* <img src={props.savedPhotos[0]} alt="an image of a dog"/>
          <img src={props.savedPhotos[1]} alt="an image of a dog"/>
          <img src={props.savedPhotos[2]} alt="an image of a dog"/> */}
          {/* <img src="http://via.placeholder.com/80x80" /> */}
        </div>
      </div>
    </div>
  );
}
 
/*
update the placeholder 
{savedPhotos && <img src={props.savedPhotos[2]} alt="an image of a dog"/>}
*/
