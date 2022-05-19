import React from "react";
import AddArtform from "./AddArtform"

//25-4
function status(response) {
  if(response.status>=200 && response.status<300){
    return response;
  } else {
    return new Promise((resolve, reject) => {
      return reject(response);
    })
  }
}

function json(response) {
  return response.json();
}

function AddDogs() {  
  return (
    <>
      <h1>Add Dog form</h1>
      <AddArtform />
    </>);    
}  
export default AddDogs;

