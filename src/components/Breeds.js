//Jude
/*
Create a feature branch as a pair for your ticket
Push that feature branch to be on GitHub
As a pair, start to think about how you'll solve the problem (you can look at the codebase and make notes)
If we have time, start working on a solution.


fetch breeds API
create an option for each breed
user selects a breed  - on change  
updates the breed in state 
picture fetched form API based on breed 

fetch data 
take the response for the server 
pass json into javaScript 
Ass array of breeds to state 
current breed  > all breeds 

hooks accessory functions  

state populated by fetch data
//
event.target -  gives you the element that triggered the event.
event.target.value return the the value of that element e.g. input field
//Testing React Components

In React, events are SynthenticEvent, a wrapper around the browser’s native event
export default function Breeds() {
  useEffect(() => {
    fetch("https://dog.ceo/dog-api/breeds-list", {
      mode: `no-cors`,
      headers: { "Access-Control-Allow-Origin": "*" }
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  });


*/

//what use effect and I using here
import React, { useEffect, useState } from "react";
import "./Breeds.css";

/*fetch data method 2 */
export default function Breeds() {
  const [data, setData] = useState([]);
  console.log(data);

  function fetchData() {
    fetch("https://dog.ceo/api/breeds/list/all")
      //convert to js
      .then((response) => response.json())
      // part 1 object.keys every item in the object
      .then((data) => setData(Object.keys(data.message)))
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  /*  

 data = an object with key value pairs 
 part 1 Object.keys(data.message) receive data in a format that UI can use 
 part 2 take that array and inject it into the dropdpwn 
 part 3 another fetch request for breed Picture?
*/

  useEffect(() => {
    fetchData();
    // trigger useEffect for the first time, once
  }, []);

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
      <img className="Breeds-image" src="http://via.placeholder.com/300x300" />
      <p>
        <button className="Breeds-button">Show me more!</button>
      </p>
    </div>
  );
}
