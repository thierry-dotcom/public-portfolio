import React, { useState, useEffect } from "react";

const App = () => {
  const APP_ID = "cf84ced0";
  const APP_Key = "a8fe44f872d3dd4c8690d52dfcc86b25	";

  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_Key}`;

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("Effect has been run");
  }, []);

  const getSearch = e => {
    e.preventDefault();
    setCounter(counter + 1);
  };

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" />
        <button className="search-button" type="submit">
          Search
        </button>
        <h1 onClick={() => setCounter(counter + 1)}>{counter}</h1>
      </form>
    </div>
  );
};

export default App;
