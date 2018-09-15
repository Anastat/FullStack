import React from 'react';



class Puhelinluettelo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        { name: 'Arto Hellas',
          numero: '040-123456' }
      ],
      newName: '',
      newNumero: ''
    }
  }

  addName = (event) => {
    
    event.preventDefault()

    if (this.state.persons.find(person => person.name.includes(this.state.newName))) {
        alert("This name already exist")
    } else {
        const nameObject = {
            name: this.state.newName,
            numero: this.state.newNumero
        }
       
        
  
        const persons = this.state.persons.concat(nameObject)
  
        this.setState({
            persons,
            newName: '',
            newNumero: ''
        })
    }
      
    
  }

  handleNameChange = (event) => {
      console.log(event.target.value)
      this.setState({newName: event.target.value})
  }

  handleNumeroChange = (event) => {
      this.setState({newNumero: event.target.value})
  }

  render() {
    return (
      <div>
        <h2>Puhelinluettelo</h2>
        <form onSubmit={this.addName}>
          <div>
            nimi: <input value={this.state.newName} onChange={this.handleNameChange}/>
          </div>
          <div>
            numero: <input value={this.state.newNumero} onChange={this.handleNumeroChange}/>
          </div>
          <div>
            <button type="submit">lisää</button>
          </div>
        </form>
        <h2>Numerot</h2>
        {this.state.persons.map (person => <li key={person.name}>{person.name} {person.numero}</li>)}
      </div>
    )
  }
}

export default Puhelinluettelo