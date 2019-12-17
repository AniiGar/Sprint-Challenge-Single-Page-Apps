import React from "react";

export default function CharacterCard(props) {
  return(
    <div>      
      <img src={props.image} alt={props.name} />
      <h3>{props.name}</h3>
      
      <p>Location: {props.location.name}</p>
      <p>Origin: {props.origin.name}</p>
      <p>Gender: {props.gender}</p>
      <p>Species: {props.species}</p>
      <p>Life Status: {props.status}</p>
    </div>
  );
}

