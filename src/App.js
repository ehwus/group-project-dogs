import React, { useState, useEffect } from "react";
import Favourites from "./components/Favourites";
import RandomDog from "./components/RandomDog";
import DogBattle from "./components/DogBattle";
import Breeds from "./components/Breeds";
import "./App.css";

export default function App() {
  // variables for the breeds and for the pictures
  const [favouriteBreeds, setFavouriteBreeds] = useState([]);
  const [savedPhotos, setSavedPhotos] = useState([]);
  const [dogImage, setDogImage] = useState(null); /* image data 1 */

//api here 

const handleNextImage = () => {
  fetch(`https://dog.ceo/api/breeds/image/random`)
  .then((response) => (response.json()))  
  //  (response.json(); console.log(response.json)))
  .then((data) => { 
    setDogImage(data.message) 

})
} 

useEffect(() => { handleNextImage()}, []);


  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Dogs! </h1>
      </header>
      <Favourites />
      <RandomDog handleNextImage={handleNextImage}
          dogImage = {dogImage}

      />
      {/* <RandomDog /> */}
      <DogBattle />
      <Breeds />
    </div>
  );
}
