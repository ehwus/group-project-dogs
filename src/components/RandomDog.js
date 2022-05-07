import React, { useEffect, useState } from "react";
import "./RandomDog.css";

export default function RandomDog(props) {  /* RandomDog */
  const [data, setData] = useState([]);   /* All breeds */

  const [dogImage, setDogImage] = useState(null); /* image data 1 */
  const [dogBreed, setDogBreed ] = useState(); /* Breed */


     /* Fetch all the data */
     useEffect(() => {
      fetch("https://dog.ceo/api/breeds/list/all")
          .then((response) => console.log( response.json())
         )      
          .then((data) => { 
            const listOfBreeds = Object.keys(data.message)
            setData(listOfBreeds) /* dot notation  object.keys (message property in this case ) ?  Freecodecamp */
            const firstBreed = listOfBreeds[1]  /* ??? get second position in the array of breeds*/
            setDogBreed(firstBreed)
        })
        .catch((error) => console.error("Type of Error:", error ));
      }, []);
  
      
  
    /* image data */
    useEffect(() => {
      fetch(`https://dog.ceo/api/breed/${dogBreed}/images/random`)/* loading image  */
        .then((response) => response.json())      
        .then((dogImagedata) => { 
        setDogImage(dogImagedata.message)
    console.log(dogImagedata)
    })
    .catch((error) => console.error("Type of Error:", error ));
    }, [dogBreed]); /* effect depends on dogBreed - runs each time?*/
  

const handleSavedPhotos =()=>{
props.photos.push(dogImage)
console.log("photos", props.photos)

}


    return (
      <div className="RandomDog">
        <h2 className="RandomDog-title">Random Dogs</h2>
        {/* <img className="RandomDog-image" src="http://via.placeholder.com/300x300" /> */}        
        {dogImage && <img className="RandomDog-image" src={dogImage} alt="an image of a dog" ></img>} {/* new images (breed) */}
        <p>


  {/* Save Image  ~   button */}
          <button className="RandomDog-button" onClick={() =>
          handleSavedPhotos()
          }
          // logic in here  
          // push the existing array         
          >Save Image</button>


 {/* RandomDog-image  ~  button */}          
          <button className="RandomDog-button"
              onClick={() => {return (
          fetch(`https://dog.ceo/api/breed/${dogBreed}/images/random`)/* responding the the onchange event  */
          .then((response) => response.json())      
          .then((dogImagedata) => { 
          setDogImage(dogImagedata.message)
      console.log(dogImagedata)}
    )  )}
              }>Next Dog</button>
        </p>
      </div>
    );
  
}