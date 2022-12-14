import { v4 as uuidv4} from 'uuid'
import React from "react"
import { createContext , useState } from "react"

const FeedbackContext = createContext()



export const FeedbackProvider = ({children}) =>{
    const [feedback , setFeedback] = useState([
        { 

        id: 1,
        text : 'This is feedback item 1',
        rating : '10',
        
    },
        { 

        id: 2,
        text : 'This is feedback item 2',
        rating : '9',
        
    },
        { 

        id: 3,
        text : 'This is feedback item 3',
        rating : '7',
        
    },
])

const [feedbackEdit , setFeedbackEdit] = useState({
    item: {},
    edit : false
})

//App.js se add or delete cut kr k idhr le aye hein

const addFeedback = (newFeedback)=>{
    newFeedback.id = uuidv4()
    setFeedback ([newFeedback,...feedback])
//console.log(newFeedback);
}

const deleteFeedback = (id) => {
    if(window.confirm('Are you sure you want to delete this feedback?')){
        setFeedback(feedback.filter((item) => item.id !==id))
    }
}
//set item to be updated
const editFeedback = (item ) =>{
        setFeedbackEdit({

            item,
            edit : true
        })
    }

    const updateFeedback = (id , updItem) =>{
            setFeedback(feedback.map((item)=>item.id === id ? { ...item, ...updItem}:item))
    }

    return( <FeedbackContext.Provider value={{ 
        feedback,
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
    }}>
        {children}
    </FeedbackContext.Provider>
    )
}

export default FeedbackContext