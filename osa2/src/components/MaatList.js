import React from 'react'

const MaatList = ({maat}) => {
  
        if (maat.length > 10) {
            return (
                <div>
                    <p>too many maches, specify another filter</p>
                </div>
            )
        } else if (maat.length < 10 && maat.length > 1) {
            return (
                <div>
                    <ul>
                       {maat.map (maa => 
                        <li key={maa.name}> {maa.name}</li>)}
                    </ul>
                </div>
            )
        } else if (maat.length === 1) {
        return (
            <div>
                <h1>{maat[0].name}</h1>
                <p>capital: {maat[0].capital}</p>
                <p>population: {maat[0].population}</p>
                <img src={maat[0].flag}></img>
            </div>
        ) 
        } else if (maat.length === 0) {
            return (
                <div>
    
                </div>
            )
        }
    }    


export default MaatList