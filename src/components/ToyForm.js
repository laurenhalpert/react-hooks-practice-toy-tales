import React, {useState} from "react";

function ToyForm({ onNewToy }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  
  function handleSubmit(event) {
    event.preventDefault();
    const newToyObj ={
      name: name,
      image: image,
      likes: 0,
      id: name
    }
    fetch("http://localhost:3001/toys", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }, 
      body: JSON.stringify(newToyObj)
    })
    .then(r=>r.json())
    .then(newToyObj=> onNewToy(newToyObj))
    
    
  }
  function handleChange(event, setter) {
    setter(event.target.value)
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
          onChange={(event, setter)=>handleChange(event, setName)}
          value={name}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          onChange={(event, setter)=>handleChange(event, setImage)}
          value={image}
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
