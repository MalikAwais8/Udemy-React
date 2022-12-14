import { useContext } from 'react'
import React from "react"
import {motion , AnimatePresence} from 'framer-motion'
import FeedbackItem from "./FeedbackItem"
import FeedbackContext from '../context/FeedbackContext'

//feedback,handledelete prop removed from function available in previous versions
function FeedbackList() {

    const {feedback} = useContext(FeedbackContext)
    if(!feedback || feedback.length === 0){
        return <p>No Feedback Yet</p>
    }
    return (
    <div className="feedback-list">
            <AnimatePresence>
        {feedback.map((item) =>(
            // <div> {item.rating}
            // </div>
            <motion.div
            key={item.id}
            initial={{opacity:0}}
            animate = {{opacity:1}}
            exit = {{opacity:0}}
        >
            <FeedbackItem key={item.id} 
            item={item}
             />
             </motion.div>

        ) )}
        </AnimatePresence>
    </div>
    )
}
//get rid of proptypes available in previous versions

export default FeedbackList
