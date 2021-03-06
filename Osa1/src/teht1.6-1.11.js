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
            <table>
                <tbody>
                <tr>
                    <td>hyvä</td>
                    <td> {props.hyva}</td>
                </tr>
                <tr>
                    <td>neutraali</td>
                    <td> {props.neutraali}</td>
                </tr>
                <tr>
                    <td>huono</td>
                    <td>{props.huono}</td>
                </tr>
                <tr>
                    <td>keskiarvo</td>
                    <td>{props.keskiarvo}</td>
                </tr>
                <tr>
                    <td>positiivisia</td>
                    <td>{props.positiivisia} %</td>
                </tr>
                </tbody>
                
            </table>
        </div>
    )
}
/* const Statistic = ({text, ammount, laskuri}) => {
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
 }*/

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


    asetaArvo = (nappi, arvo, sumArvo) => () => {
        
        this.setState({ [nappi]: arvo });
        this.setState({summa: sumArvo});
        this.laskuriKasvaa();
        if (nappi === "hyva")  {
            this.setState ({positiivisia: this.state.positiivisia + 1})
        }
    } 


    render () {
        return (
            <div>
                <div>
                    <h2>Anna palautetta</h2>
                    <Button handleClick={this.asetaArvo('hyva', this.state.hyva+1, this.state.summa+1)} text="Hyvä"/> 
                    <Button handleClick={this.asetaArvo('neutraali', this.state.neutraali+1, this.state.summa + 0)} text="Neutraali"/> 
                    <Button handleClick={this.asetaArvo('huono', this.state.huono + 1, this.state.summa -1)} text="Huono"/>
                </div>
                <div>
                    <h2>Statistiikka</h2>
                    <Statistics hyva={this.state.hyva} 
                        neutraali={this.state.neutraali} 
                        huono={this.state.huono} 
                        laskuri={this.state.laskuri}
                        keskiarvo={(this.state.summa/this.state.laskuri).toFixed(2)}
                        positiivisia={(this.state.positiivisia*100/this.state.laskuri).toFixed(1)}/>
                </div>
            </div>
            
        )
    }
    
}




ReactDOM.render(
    <App />,
    document.getElementById('root')
  )

