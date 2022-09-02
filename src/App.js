import React from "react"
import { v4 as uuidv4} from 'uuid'
import {BrowserRouter as Router , Route, Routes} from 'react-router-dom'
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackData from "./data/feedbackdata"
import { useState } from "react"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
import AboutPage from "./pages/AboutPage"
//import AboutPage from "./pages/AboutPage"
function App(){
    const [feedback ,setFeedback] = useState(FeedbackData)

    const addFeedback = (newFeedback)=>{
        newFeedback.id = uuidv4()
        setFeedback ([newFeedback,...feedback])
console.log(newFeedback);
    }
    const deleteFeedback = (id) => {
        if(window.confirm('Are you sure you want to delete this feedback?')){
            setFeedback(feedback.filter((item) => item.id !==id))
        }
    }

    return  (
   
    <Router>
    <Header />
    <div className= "container">
        
        
        <FeedbackForm handleAdd = {addFeedback}/>
        <FeedbackStats feedback = {feedback}/>
        <FeedbackList 
        feedback={feedback} 
        handleDelete = {deleteFeedback}
        />
        
        {/* <Routes path='/about'>This is About Page</Routes> */}
        <Routes>       
             <Route path='/about' component ={AboutPage}/>
             </Routes>

    
    </div>
    
    </Router>
    )
     
}
export default App