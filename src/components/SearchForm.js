import React, { useState, useEffect } from "react";
import Axios from "axios";
export default function SearchForm({ onSearch }) {
  const [name, setName] = useState("");
  const [search, setSearch] = useState([]);
  function onSearch(name) {
    Axios
    .get(`https://rickandmortyapi.com/api/character/?name=${name}`)
    .then(response => {
      setSearch(response.data.results);
      console.log("search", response.data.results);
    }
    );
  }
  const handleInputChange = e => {
    setName(e.target.value);
  };
  return (
    <section className="search-form">
      <form onSubmit={event => {
        event.preventDefault();
        onSearch(name);
      }}
      >
        <input onChange={event => handleInputChange(event)}
        placeholder="name"
        value={name}
        name="name"/>
        <button type="submit">Search</button>
      </form>
      {search.map(search => {
        return (
          <div className="searchResults">
            <img src={search.image} alt={search.name} />
            <h3>{search.name}</h3>
            
            <p>Location: {search.location.name}</p>
            <p>Origin: {search.origin.name}</p>
            <p>Gender: {search.gender}</p>
            <p>Species: {search.species}</p>
            <p>Life Status: {search.status}</p>
          </div>
        )
      })}
    </section>
  )
}
