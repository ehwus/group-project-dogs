import React, { useEffect, useState } from "react";
import "./Breeds.css";

export default function Breeds() {
  const [data, setData] = useState([]);   /* All breeds */

  const [dogImage, setDogImage] = useState(null); /* image data 1 */
  const [dogBreed, setDogBreed ] = useState(null); /* Breed */

  /*Breeds data 1 */
    useEffect(() => {
    fetch("https://dog.ceo/api/breeds/list/all")
        .then((response) => response.json())      
        .then((data) => { 
          const listOfBreeds = Object.keys(data.message)
          setData(listOfBreeds) /* dot notation  object.keys (message property in this case ) ?  Freecodecamp */
          const firstBreed = listOfBreeds[0]  /* get first position in the array of breeds*/
          setDogBreed(firstBreed)
      })
      .catch((error) => console.error("Type of Error:", error ));
    }, []);

 
 /* image data 1 */
       useEffect(() => {
        fetch(`https://dog.ceo/api/breed/${dogBreed}/images/random`)/* loading image  */
          .then((response) => response.json())      
          .then((dogImagedata) => { 
          setDogImage(dogImagedata.message)
      console.log(dogImagedata)
    })
    .catch((error) => console.error("Type of Error:", error ));
  }, [dogBreed]); /* effect depends on dogBreed - runs each time?*/


  return (
    <div className="Breeds">
      <h2 className="Breeds-title">Select a Breed</h2>


  {/* select dropdown  */}      
      <p>
        <select className="Breeds-select" 
         onChange={(event) =>  {

    const breed = event.target.value 

    setDogBreed(breed)

        fetch(`https://dog.ceo/api/breed/${breed}/images/random`)/* New image in response to the onchange event*/
          .then((response) => response.json())      
          .then((dogImagedata) => { 
          setDogImage(dogImagedata.message)
      console.log(dogImagedata)
    })
        }}
        >
          {data.map((breed) => (
            <option key={breed}>{breed}</option>
          ))}
        </select>
      </p>


  {/* Show me more! button  */}
      <div>
      {/* <img className="Breeds-image" src="http://via.placeholder.com/300x300" /> */}
      {dogImage && <img className="Breeds-image" src={dogImage} alt="an image of a dog" ></img>} {/* new images (breed)  */}      
      <p>
        <button className="Breeds-button"        
        onClick={() => 
          fetch(`https://dog.ceo/api/breed/${dogBreed}/images/random`)/* responding the the onchange event  */
          .then((response) => response.json())      
          .then((dogImagedata) => { 
          setDogImage(dogImagedata.message)
      console.log(dogImagedata)
    })}        
    >Show me more!</button>
    </p>
    </div>

    </div>
  );
}