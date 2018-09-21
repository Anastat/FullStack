import React from 'react'

const ShowNumberList = (props) => {
    
        return (
        <div>
            <h2>Numerot</h2>
            
                {props.names.map (person => 
                <div key={person.name}>
                {person.name} {person.numero} 
                <button onClick={props.handleClick} value={person.id} name={person.name}>poista</button>
                </div>)
            }
            
        </div>
        ) 
}

export default ShowNumberList