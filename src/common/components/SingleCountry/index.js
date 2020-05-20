import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import withCountries from '../../hocs/withCountries'
import { toJS } from 'mobx'

class SingleCountry extends Component {


    render() {
        const { countries } = this.props
        const { id: alpha3Code } = this.props.match.params
        if(countries.length === 0)
            return <div>Country Loading</div>
        return (
            <div>
                Population:
                {countries.find(eachCountry => eachCountry.alpha3Code === alpha3Code).population}
            </div>
        )
    }
}

const EnhancedSingleCountry = withCountries(withRouter(SingleCountry))

export default EnhancedSingleCountry