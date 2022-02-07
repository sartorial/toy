import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys, handleDeleteItem, likeClick}) {


  const toyList = toys.map(toy => { return <ToyCard handleDeleteItem={handleDeleteItem} likeClick={likeClick} key={toy.id} id={toy.id} name={toy.name} image={toy.image} likes={toy.likes} />})

  return (
    <div id="toy-collection">{toyList}</div>
  );
}

export default ToyContainer;
