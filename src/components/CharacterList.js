import React, { useEffect, useState } from "react";
import axios from 'axios'; 

import CharacterCard from './CharacterCard'

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

    axios
      .get(`https://rickandmortyapi.com/api/character/`)
      .then(response => {
        const character = response.data.results;
        console.log(response.data);
        setCharacter([...character]);
      })
      .catch(error => {
        console.error(error);
      });

  }, []);

  return (
    <section className="character-list">
      {character.map((prop, index) => {
        return (
          <div key={prop.id}>
            <CharacterCard
              key={index}
              image={prop.image}
              name={prop.name}
              location={prop.location}
              origin={prop.origin}
              gender={prop.gender}
              species={prop.species}
              status={prop.status}
            />
          </div>
        )
      })}
    </section>
  );
}
