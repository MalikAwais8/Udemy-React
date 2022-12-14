import PropTypes from 'prop-types'
import React from "react"

function Card({children , reverse}) {
  // return (
  //   <div className= {`card ${reverse && 'reverse'}`}>
  //     {children}
  //   </div>
  // )
  return(
    
  <div className="card">
    {children}
  </div>
  
  )
}

Card.defaultProps = {
  reverse : false,
}

Card.protoTypes = {
  children : PropTypes.node.isRequired,
  reverse : PropTypes.bool,
}

export default Card
