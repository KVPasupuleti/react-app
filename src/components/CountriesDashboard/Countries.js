import React from 'react';
import CountryCard from './CountryCard';
import { CountriesStyles } from './CSS.js';

class Countries extends React.Component {

    renderCountries = () => {
        const countriesList = this.props.countries.map((eachCountry, index) => {
            return <CountryCard key={index} countryDetails={eachCountry} selectedTheme={this.props.selectedTheme}
            filterCountriesByClick={this.props.filterCountriesByClick}
            allCountries={this.props.allCountries} />;
        });
        return countriesList;
    }

    render() {
        return (
            <CountriesStyles className="countries">{this.renderCountries()}</CountriesStyles>
        );
    }
}

export default Countries;