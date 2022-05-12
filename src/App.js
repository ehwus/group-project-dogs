import React, { useState, useEffect } from "react";
import Favourites from "./components/Favourites";
import RandomDog from "./components/RandomDog";
import DogBattle from "./components/DogBattle";
import Breeds from "./components/Breeds";
import "./App.css";

export default function App() {
  // 1 variables for the breeds and for the pictures
  const [favouriteBreeds, setFavouriteBreeds] = useState([]);
  const [savedPhotos, setSavedPhotos] = useState([]);
  const [dogImage, setDogImage] = useState(null); /* define image data 1 */


//Next image  -------------------------------------------------------
const handleNextImage = () => {
  fetch(`https://dog.ceo/api/breeds/image/random`)
  .then((response) => (response.json()))  
  //  (response.json(); console.log(response.json)))
  .then((data) => { 
    setDogImage(data.message) 
})
 .catch((error) => console.error("Type of Error:", error ));
} 
//?
useEffect(() => {
  handleNextImage()}, []);

//2 saved image ------------------------------------------------------
const handleSavedImage = () => {
//  console.log("handleSavedImage anything here?")
 console.log(dogImage)
 //update state - to setSavedPhoto 
 //...copy of the dog image 
 // photo 1 and update all the other images with the spread operator  
  setSavedPhotos([...savedPhotos, dogImage])
}

//4 insert select A Breed aPI call - text ----------------------------   

//3 passing the updated state as props into the components -----------
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Dogs! </h1>
      </header>
      
      <Favourites savedPhotos={savedPhotos}/>
      <RandomDog  handleSavedImage ={handleSavedImage} handleNextImage ={handleNextImage}  dogImage = {dogImage}/>
      <DogBattle handleNextImage ={handleNextImage} />
      <Breeds />
    </div>
  );
}
