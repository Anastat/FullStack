import React from 'react'


const Kurssi = ({kurssi}) => {
    return (
        <div>
            <h1>
                {kurssi.nimi}
            </h1>
           
            {kurssi.osat.map(course => <p key={course.id}>{course.nimi} {course.tehtavia}</p>)}
            
        </div>
    )
}

export default Kurssi