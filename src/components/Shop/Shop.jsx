import React from 'react'
import { useState, useEffect } from 'react'
import axios from "axios"
import db from '../test'
console.log(db)

export default function Shop() {
  const [category, setCategory] = useState(db);
  const handleBtns = (e) => {
  let word=e.target.value;
   
  if(word === "All"){
    setCategory(db)
  }
  else if(word === "Cars") {
    const filtered = db.filter(item=>item.kind === "Cars");
    setCategory(filtered)
  }
  else if(word === "Views") {
    const filtered = db.filter(item=>item.kind === "Views");
    setCategory(filtered)
  }
}

  return (

    <div>
          <div>
            <button value="All" onClick={handleBtns}>All</button>
            <button value="Cars" onClick={handleBtns}>Cars</button>
            <button value="Views" onClick={handleBtns}>Views</button>
          </div>


      {category.map((item) => (
        <div className='card'>
          <p>{item.product_name}</p>
          <p>{item.price}</p>
          <p>{item.description}</p>
          <p>{item.catergory}</p>
        </div>
      ))}
    </div>
  )
}
