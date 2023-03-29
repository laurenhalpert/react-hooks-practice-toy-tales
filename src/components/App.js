/*
App
|_Header
|_ToyForm
|_ToyContainer
    |_ToyCard
*/
import React, { useEffect, useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([])

  useEffect(()=> {
    fetch("http://localhost:3001/toys")
    .then(r=>r.json())
    .then(toys=> setToys(toys))
  })

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }
  function handleNewToy(toyObj) {
    setToys([...toys, toyObj])
  }
  function handleDelete(id) {
    setToys(toys.filter(toy=> toy.id !== id))
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm onNewToy={handleNewToy}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} onDel={handleDelete} />
    </>
  );
}

export default App;
