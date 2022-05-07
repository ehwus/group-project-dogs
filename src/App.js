import React, { useState } from "react";
import Favourites from "./components/Favourites";
import RandomDog from "./components/RandomDog";
import DogBattle from "./components/DogBattle";
import Breeds from "./components/Breeds";
import "./App.css";

export default function App() {
  // variables for the breeds and for the pictures
  const [favouriteBreeds, setFavouriteBreeds] = useState([]);
  const [savedPhotos, setSavedPhotos] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Dogs! </h1>
      </header>
      <Favourites />
      <RandomDog photos={savedPhotos}/>
      <DogBattle />
      <Breeds />
    </div>
  );
}
