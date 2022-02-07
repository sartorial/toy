import React, { useState } from "react";

function ToyForm({addToy}) {

const [ toyName, setToyName ] = useState('')
const [ toyImage, setToyImage ] = useState('')

function handleSubmit(e) {
  e.preventDefault();
  const newToy = {
    name: toyName,
    image: toyImage,
    likes: 0
  }
  fetch("http://localhost:3001/toys", {
    method: "POST",
    headers: {
      "Content-Type" : "application/json"
    },
    body: JSON.stringify(newToy)
  })
  .then(res => res.json())
  .then(data => addToy(data))
  setToyName('')
  setToyImage('')
}



  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          onChange={e => setToyName(e.target.value)}
          value={toyName}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          onChange={e => setToyImage(e.target.value)}
          value={toyImage}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
