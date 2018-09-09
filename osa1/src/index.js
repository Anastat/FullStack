import React from 'react'
import ReactDOM from 'react-dom'

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
        console.log(this.state.laskuri, this.state.summa)
        return (
            <div>
                <div>
                    <h2>Anna palautetta</h2>
                    <button onClick={this.clickHyva}>hyvä</button> 
                    <button onClick={this.clickNeutraali}>neutraali</button> 
                    <button onClick={this.clickHuono}>huono</button>
                </div>
                <div>
                    <h2>Statistiikka</h2>
                    <p>hyvä {this.state.hyva}</p>
                    <p>neutraali {this.state.neutraali}</p>
                    <p>huono {this.state.huono}</p>
                    <p>keskiarvo {(this.state.summa/this.state.laskuri).toFixed(2)}</p>
                    <p>positiivisia {(this.state.positiivisia*100/this.state.laskuri).toFixed(1)} %</p>
                </div>
            </div>
            
        )
    }
    
}




ReactDOM.render(
    <App />,
    document.getElementById('root')
  )

