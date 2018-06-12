import React from 'react'
import ReactDOM from 'react-dom'

const Otsikko = (props) => {
    return (
        <div>
            <h1>{props.name}</h1>
        </div>
    )
}

const Sisalto = (props) => {
    return (
        <div>
            <p>{props.name} {props.tehtavia}</p>
        </div>
    )
}

const Yhteensa = (props) => {
    return (
        <div>
        <p>yhteensä {props.count} tehtävää</p>
    </div>
    )
}

const App = () => {
  const kurssi = 'Half Stack -sovelluskehitys'
  const osa1 = 'Reactin perusteet'
  const tehtavia1 = 10
  const osa2 = 'Tiedonvälitys propseilla'
  const tehtavia2 = 7
  const osa3 = 'Komponenttien tila'
  const tehtavia3 = 14

  return (
    <div>
        <Otsikko name={kurssi} />
        <Sisalto name={osa1} tehtavia={tehtavia1} />
        <Sisalto name={osa2} tehtavia={tehtavia2} />
        <Sisalto name={osa3} tehtavia={tehtavia3} />
        <Yhteensa count={tehtavia1 + tehtavia2 + tehtavia3} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
