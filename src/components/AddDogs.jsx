import React from "react";
import AddDogform from "./AddDogform"


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
      <AddDogform />
    </>);    
}  
export default AddDogs;

