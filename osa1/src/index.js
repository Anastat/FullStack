import React from 'react'
import ReactDOM from 'react-dom'

const Button = ({handleClick,  text}) => (
    <button onClick={handleClick}>
        {text}
    </button>
)

const Statistics = (props) => {
    if (props.laskuri===0) {
        return (
            <div>
                ei yhtään palautetta annettu
            </div>
        )
    }
    return (
        <div>
            <p>hyvä {props.hyva}</p>
            <p>neutraali {props.neutraali}</p>
            <p>huono {props.huono}</p>
        </div>
    )
}
 const Statistic = ({text, ammount, laskuri}) => {
     if (laskuri>0) {
        return (
            <div>
                <p>{text} {ammount}</p>
            </div>
        )
     }
     return (
         <div>
             
         </div>
     )
 }

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hyva: 0,
            neutraali: 0,
            huono: 0,
            summa: 0,
            laskuri: 0,
            positiivisia: 0
        }
    }
    laskuriKasvaa = () => {
        this.setState({
            laskuri: this.state.laskuri +1
        })
    }
    clickHyva = () => {
        this.setState({
            hyva: this.state.hyva + 1,
            summa: this.state.summa + 1,
            positiivisia: this.state.positiivisia + 1
        });
        this.laskuriKasvaa()    
    }
    clickNeutraali = () => {
        this.setState({
            neutraali: this.state.neutraali + 1
        });
        this.laskuriKasvaa()
    }
    clickHuono = () => {
        this.setState({
            huono: this.state.huono + 1,
            summa: this.state.summa - 1,
        });
        this.laskuriKasvaa() 
    }

    render () {
        return (
            <div>
                <div>
                    <h2>Anna palautetta</h2>
                    <Button handleClick={this.clickHyva} text="Hyvä"/> 
                    <Button handleClick={this.clickNeutraali} text="Neutraali"/> 
                    <Button handleClick={this.clickHuono} text="Huono"/>
                </div>
                <div>
                    <h2>Statistiikka</h2>
                    <Statistics hyva={this.state.hyva} neutraali={this.state.neutraali} huono={this.state.huono} laskuri={this.state.laskuri}/>
                    <Statistic text="keskiarvo" ammount={(this.state.summa/this.state.laskuri).toFixed(2)} laskuri={this.state.laskuri}/>
                    <Statistic text="positiivisia" ammount={(this.state.positiivisia*100/this.state.laskuri).toFixed(1)} laskuri={this.state.laskuri} /> 
                </div>
            </div>
            
        )
    }
    
}




ReactDOM.render(
    <App />,
    document.getElementById('root')
  )

