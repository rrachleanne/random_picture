import React from 'react'
import faker from 'faker'
import Comment from './Comment'

const App = () => {
    return(
        <div className="comments">
           <Comment 
           author="Rachel Williams"
           text="you did it!"
           />
            <Comment 
           author="Jane Smith"
           text="Using faker"
           />
            <Comment 
           author="Bob Smith"
           text="To generate random photos"
           />
        </div>
        
    )
}

export default App