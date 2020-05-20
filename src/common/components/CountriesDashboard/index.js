import React, { Component } from 'react'
import withCountries from '../../hocs/withCountries'
import { withRouter } from 'react-router-dom'

class CountriesDashboard extends Component {

    showClickedCountry = (e) => {
        const { name } = e.target
        const { history } = this.props
        history.push(`/single-country/${name}`)
    }

    render() {
        const { countries } = this.props
        return (
            <div>
                {countries.map((eachCountry, index) => 
                <button 
                name={eachCountry.alpha3Code}
                key={index} 
                style={{ display: "block", border: "2px solid grey" }}
                onClick={this.showClickedCountry}
                >{eachCountry.name}</button>
                )}
            </div>
        )
    }
}

const EnhancedCountriesDashboard = withCountries(withRouter(CountriesDashboard))

export default EnhancedCountriesDashboard