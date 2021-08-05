import React from 'react';
    import ThingCard from '../../components/ThingCard/ThingCard'
    import { Link } from 'react-router-dom'

    const CoolThings = (props) => {
      return (
        <>
          <Link to="/">Cool Things</Link>

          {props.things.map((thing, idx) => 
            <ThingCard key={idx} thing={thing}/>
          )}
        </>
      )
    }

    export default CoolThings