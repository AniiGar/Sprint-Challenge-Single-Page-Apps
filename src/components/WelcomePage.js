import React from "react";

import Route from "react-router-dom";

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="Rick"
        />        
             
        {/* <Route path='/CharaterList' component={CharacterList} />
        <Route path='/Search' component={SearchForm} /> */}
      </header>
    </section>
  );
}
