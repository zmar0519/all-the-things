import React from 'react';
import ThingCard from '../../components/ThingCard/ThingCard'
import { Link } from 'react-router-dom'

const CookingThings = (props) => {
  return (
    <>
      <Link to="/">Home</Link>

      {props.things.map((thing, idx) => 
        <ThingCard key={idx} thing={thing}/>
      )}
    </>
  )
}

export default CookingThings