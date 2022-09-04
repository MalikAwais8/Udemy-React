import React from "react"

import {BrowserRouter as Router , Route, Routes} from 'react-router-dom'
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
import AboutPage from "./pages/AboutPage"
import AboutIconLink from "./components/AboutIconLink"
import {FeedbackProvider} from './context/FeedbackContext'

function App(){
     

    
 // yahan se delete,add feedback ko cut kia hy feedbackcontext me hy ab

    return  (
   <FeedbackProvider>
    <Router>
    <Header />
    <div className= "container">
        <Routes>
        <Route exact
         path="/"
        element ={
            <>
    <FeedbackForm />
    <FeedbackStats/>
        <FeedbackList 
        
        // feedback={feedback} --> removed because we are now not longer getting feedback from here
        //deletefeedback b hata dea idhe se
       />
        </>
        }
        ></Route>
        <Route path='/about' element ={<AboutPage />}/>
        <Route element ={<AboutIconLink />}/>

    
        
        
      
          
             
             </Routes>

    
    </div>
    
    </Router>
    </FeedbackProvider>
    )
     
}
export default App