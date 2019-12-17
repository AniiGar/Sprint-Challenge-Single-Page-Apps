import React from "react";
import { Route, NavLink } from 'react-router-dom'


import Header from "./components/Header.js";
import WelcomePage from './components/WelcomePage';
import CharacterList from './components/CharacterList';
import SearchForm from './components/SearchForm';

export default function App() {
  return (
    <main>
      <Header />
      <NavLink exact to="/" activeClassName="activeNavButton" className="navLink">Home</NavLink>
      <NavLink to='/CharacterList' activeClassName="activeNavButton" className="navLink">Character List</NavLink>
      <NavLink to='/Search' activeClassName="activeNavButton" className="navLink">Search</NavLink> 
      <Route exact path="/" component={WelcomePage} />
      <Route exact path="/CharacterList" component={CharacterList} /> 
      <Route exact path="/Search" component={SearchForm} />
    </main>
  );
}
