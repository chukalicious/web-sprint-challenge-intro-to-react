import React, { useEffect, useState} from "react";
import axios from "axios"
import Character from "./components/Character"

import "./App.css";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get("https://swapi.dev/api/people/")
    .then((response) => {
      console.log(response.data.results)
      setCharacters(response.data.results)

    })
    .catch(error => console.log(error)) 
  }, [])
    
  return (

    <div className="App">
      <h1 className="Header">Characters</h1>

      {characters.map((character) => {
        return (
          <Character 
          name={character.name}
          gender={character.gender}
          key={character.url}
          birthYear={character.birth_year}
          height={character.height}
          hair={character.hair_color}
          films={character.films}
      />
    )})
  }
    </div>
)}

export default App;
