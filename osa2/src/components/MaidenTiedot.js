import React from 'react';
import axios from 'axios';
import MaatList from './MaatList'

class MaidenTiedot extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            maat: [],
            maaFilter: ''
        }
       
    }

    

    componentDidMount() {
        axios
            .get('https://restcountries.eu/rest/v2/all')
            .then(response => {
                this.setState({maat: response.data})
            })
    }

    handleFilterChange = (event) => {
        this.setState({maaFilter: event.target.value})
    }
    

    render () {
        const maatToShow = this.state.maaFilter.length === 0 ?
        this.state.maat :
        this.state.maat.filter(maa => maa.name.toLowerCase().includes(this.state.maaFilter.toLowerCase()))
        
        return (
            <div>
                find countries: <input value={this.state.maaFilter} onChange={this.handleFilterChange}/>
                <MaatList maat={maatToShow}/>
            </div>
        )
    }
}

export default MaidenTiedot