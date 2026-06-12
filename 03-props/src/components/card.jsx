import React from 'react'

const Card = (props) => {
    console.log(props);
    
  return (
    <div>
      <div className="card">
      <h2><mark>hello there you are learning react js</mark></h2>
      <h1>{props.user}</h1>
      <p>Age: {props.age}</p>
      <p>Father: {props.father}</p>
      <button>view profile</button>
     </div>
    </div>
  )
}

export default Card
