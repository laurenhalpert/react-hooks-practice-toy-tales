import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, onDel }) {
  return (
    <div id="toy-collection">{/* Render the collection of ToyCards */}
    {toys.map(toy=>{
      return <ToyCard key={toy.id} toy={toy} onDel={onDel}/>
    })}
    </div>
  );
}

export default ToyContainer;
