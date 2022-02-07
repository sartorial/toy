import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([])


  useEffect(() => {
    fetch('http://localhost:3001/toys')
      .then(res => res.json())
      .then(data => setToys(data))

  }, [])


  function addToy(newToy) {
    setToys([...toys, newToy])
  }


  function handleClick() {
    setShowForm((showForm) => !showForm);
  }


  function handleDeleteItem(id) {
    const updatedItems = toys.filter((toy) => { return toy.id !== id})
    setToys(updatedItems)
    }

    function likeClick(updateToy){
      const upItem = toys.map(toy => { return toy.id === updateToy.id ? updateToy : toy })
      setToys(upItem)
    }

  return (
    <>
      <Header />
      {showForm ? <ToyForm addToy={addToy} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} handleDeleteItem={handleDeleteItem} likeClick={likeClick} />
    </>
  );
}

export default App;
