import React from 'react';
import CountryCard from './CountryCard';

class Countries extends React.Component {

    renderCountries = () => {
        const countriesList = this.props.countries.map((eachCountry, index) => {
            return <CountryCard key={index} countryDetails={eachCountry} selectedTheme={this.props.selectedTheme}
            filterCountriesByClick={this.props.filterCountriesByClick}
            allCountries={this.props.allCountries} themeOptions={this.props.themeOptions}/>;
        });
        return countriesList;
    }

    render() {
        return (
            <div className="countries">{this.renderCountries()}</div>
        );
    }
}

export default Countries;
