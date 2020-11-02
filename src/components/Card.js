import react from 'react'


//custom component for styles
const styles={
    backgroundColor: "gray"
}


const Card = (props) =>{
    return(
        <div style={styles}>
    {props.children}
        </div>
        
    )
}

export default Card