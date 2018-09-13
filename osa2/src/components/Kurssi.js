import React from 'react'
const yhteensa = (osat) => Object.keys(osat).reduce(function (sum, key) {
            return sum + osat[key].tehtavia;
        }, 0);


const Kurssi = ({kurssi}) => {
    return (
        <div>
            <h1>
                {kurssi.nimi}
            </h1>
           
            {kurssi.osat.map(osa => <p key={osa.id}>{osa.nimi} {osa.tehtavia}</p>)}
           <p>Yhteensä {yhteensa(kurssi.osat)} tehtavia</p>
        </div>
    )
}

export default Kurssi