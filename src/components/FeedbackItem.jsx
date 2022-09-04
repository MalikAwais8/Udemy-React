// import { useState } from "react"
import React from "react"
import {FaTimes , FaEdit} from 'react-icons/fa'
import { useContext } from "react"
import PropTypes from 'prop-types'
import FeedbackContext from "../context/FeedbackContext"


import Card from "./shared/Card"

function FeedbackItem({item}) {
    // const [rating , setRating] = useState(7)
    // const [text , setText] = useState('This is an example of feedback item')
  const {deleteFeedback} = useContext(FeedbackContext)
    
  return (
    // <div className="card">

     
    // </div>
    <Card>
      <div className="num-display"> {item.rating} </div>
      <button onClick={() => deleteFeedback(item.id)} className="close">
        <FaTimes color="purple"/>
      </button>
      <button className="edit">
        <FaEdit color="purple"/>
      </button>
      <div className="text-display"> {item.text} </div>
    </Card> 
    
  
  )
  }

  FeedbackItem.propTypes = {
    item : PropTypes.object.isRequired,
  }
export default FeedbackItem
