import React from 'react';
import ShowNumberList from './ShowNumberList';


class Puhelinluettelo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      filterName: '',
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

  nameFilter = (event) => event.preventDefault()

  handleNameChange = (event) => {
      console.log(event.target.value)
      this.setState({newName: event.target.value})
  }

  handleNumeroChange = (event) => {
      this.setState({newNumero: event.target.value})
  }

  handleFilterChange = (event) => {
    this.setState({filterName: event.target.value})
  }

  render() {
    const namesToShow = this.state.filterName ===''? 
        this.state.persons : 
        this.state.persons.filter(person => person.name.toLowerCase().includes(this.state.filterName.toLowerCase()));

    return (
      <div>
        <h2>Puhelinluettelo</h2>
        <form onSubmit={this.nameFilter}>
        <div>
            rajaa näytettäviä: <input value={this.state.filterName} onChange={this.handleFilterChange}/>
        </div>

        </form>
        <h2>Lisää uusi</h2>
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
        <ShowNumberList names={namesToShow}/>
      </div>
    )
  }
}

export default Puhelinluettelo