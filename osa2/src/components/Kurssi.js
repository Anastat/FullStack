import React from 'react'
const Yhteensa = (osat) => {
    let sum = 0;
    osat.map(osa => sum += Number(osa.tehtavia));
    return sum;
}

const Kurssi = ({kurssi}) => {
    return (
        <div>
            <h1>
                {kurssi.nimi}
            </h1>
           
            {kurssi.osat.map(osa => <p key={osa.id}>{osa.nimi} {osa.tehtavia}</p>)}
            <p>Yhteennsä {Yhteensa(kurssi.osat)} tehtävää</p>
        </div>
    )
}

export default Kurssi