import React from 'react'


const NameFilter = (props) => {
    return (
        <div>
            rajaa näytettäviä: <input onChange={props.handler}/>
        </div>
    )
}


export default NameFilter



        