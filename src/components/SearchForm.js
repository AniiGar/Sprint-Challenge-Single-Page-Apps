import React, { useState } from "react";

export default function SearchForm(props) {
 
  const [searchItem, setSeachItem] = useState();

  const onSearch = (event) => {
    
    event.preventDefault();
  };

  const handleChange = (event) => {

    event = 'Search Comolete!'
    setSeachItem();
  };

  console.log(props)

  return (
    <section className="search-form">
      {<form onSubmit={(props) => onSearch(props.name)}>
        <input
          onChange={handleChange}
          placeholder="name"
          value={props.name}
          name="name"
        />
        <button type="submit">Search</button>
      </form>
      }    
    </section>
  );
}
