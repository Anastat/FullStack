import React from 'react'

const ShowNumberList = ({names}) => {
    
        return (
        <div>
            <h2>Numerot</h2>
            <ul>
                {names.map (person => 
                <li key={person.name}>{person.name} {person.numero}</li>)}
            </ul>
        </div>
        )
       
    
}

export default ShowNumberList