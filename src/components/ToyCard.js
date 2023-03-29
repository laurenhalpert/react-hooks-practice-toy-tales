import React, {useState} from "react";

function ToyCard({ toy, onDel }) {
  const [likes, setLikes] = useState(toy.likes)
  
  function handleDonation() {
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
    onDel(toy.id)
  }
  function handleLike() {
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({likes: likes})
    })
    .then(r=>r.json())
    .then(toy=> setLikes(()=> toy.likes + 1))
  }
  return (
    <div className="card">
      <h2>{toy.name}</h2>
      <img
        src={toy.image}
        alt={toy.name}
        className="toy-avatar"
      />
      <p>{toy.likes} Likes </p>
      <button className="like-btn"onClick={handleLike}>Like {"<3"}</button>
      <button className="del-btn" onClick={handleDonation}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
