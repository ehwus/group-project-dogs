
//what use effect and I using here
import React, { useEffect, useState } from "react";
import "./Breeds.css";

/*fetch data method 2 */
export default function Breeds() {
  const [data, setData] = useState([]);
  console.log(data);

  let dogsArr;
  //FETCH CALLS  
  
  /*Breeds data 1 */
    useEffect(() => {
    fetch("https://dog.ceo/api/breeds/list/all")
        .then((response) => response.json())      
        .then((data) => {/* part 1 object.keys every item in the object*/
        setData(Object.keys(data.message))
      })
      .catch((error) => console.error("Type of Error:", error ));
    }, []);

//     const [dogImage, setDogImage] = useState(null);
//  /* image data 1 */
//        useEffect(() => {
//          fetch("https://dog.ceo/api/breeds/image/random")
//       .then((response) => response.json())      
//       .then((data) => {/* part 1 object.keys every item in the object*/
//       setData(Object.keys(data.message))
//     })
//     .catch((error) => console.error("Type of Error:", error ));
//   }, []);



  return (
    <div className="Breeds">
      <h2 className="Breeds-title">Select a Breed</h2>
      <p>
        <select className="Breeds-select">
          {data.map((breed) => (
            //mapping over the object we need a key
            //opt 1 for the user  2 for react
            <option key={breed}>{breed}</option>
          ))}
        </select>
      </p>
      <div>
      <img className="Breeds-image" src="http://via.placeholder.com/300x300" />
      {/* {dogImage && <img width={"200px"} height={"200px"} src={dogImage}></img>} */}
      <p>
        <button className="Breeds-button"
        
        
        
        >Show me more!</button>
        {/* <button className="Breeds-button" onClick={handleOnClick}>Show me more!</button> */}
      </p>
      </div>

    </div>
  );
}
