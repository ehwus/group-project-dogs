//what use effect and I using here
import React, { useState } from "react";
import "./Breeds.css";

/*fetch data method 2 */
export default function Breeds() {
  // image data
  const [url, setUrl] = useState("");
  console.log(data);

  function fetchData2() {
    fetch("https://dog.ceo/api/breeds/image/random")
      //convert to js
      .then((response) => response.json())
      // part 1 object.keys every item in the object
      .then((data) => setUrl(data[0].url))
      .catch((error) => {
        console.error("URL Error:", error);
      });
  }

  // const [url, setUrl]
  return (
    <div className="Breeds">
      {/* Part 2  */}
      <div className="Breeds-button">
        <img src={url} />
        <p>
          <button className="Breeds-button" onClick={fetchData2}>
            Show me more!
          </button>
        </p>
      </div>
    </div>
  );
}
