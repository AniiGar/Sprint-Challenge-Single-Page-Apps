import React from "react";
import Header from "./components/Header.js";
import WelcomePage from './components/WelcomePage';
import SearchForm from './components/SearchForm';

import { Route } from "react-router-dom";

import CharacterList from './components/CharacterList';


export default function App() {
  return (
    <main>
      <Header />
      <Route exact path="/" component={WelcomePage} />
      <SearchForm path='/Search' component={SearchForm} />   
      <Route exact path="/Character/:id" component={CharacterList} />
    </main>
  );
}
