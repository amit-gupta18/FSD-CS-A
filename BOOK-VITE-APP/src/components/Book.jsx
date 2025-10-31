import React, { useState } from 'react'
import './Book.css'
const Book = ({book}) => {
    const [count,setCount] = useState(0);
    function handleAddtoCart(){
        alert(`${book.title} Added Successfully`)
    }
  return (
    <div className='card'>
      <img src={book.image} alt="book image" width={200} height={200} />
      <h3>Title: {book.title}</h3>
      <h4>Price: ₹{book.price}/-</h4>
      <div>
        <button onClick={() => setCount(count - 1)}>-</button>
        <span>{count}</span>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
      <button onClick={handleAddtoCart}>Add to Cart</button>
    </div>
  )
}

export default Book
