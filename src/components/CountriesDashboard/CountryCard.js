import React from 'react';
import { withRouter } from 'react-router-dom';

class CountryCard extends React.Component {

    onClickCountryCard = () => {
        const { countryDetails, allCountries, themeOptions } = this.props;

        window.localStorage.setItem("country", JSON.stringify(countryDetails));
        window.localStorage.setItem("themeOptions", JSON.stringify(themeOptions));
        window.localStorage.setItem("allCountries", JSON.stringify(allCountries));

        this.props.history.push(`country-dashboard-app/details/${countryDetails.alpha3Code}`);
    }

    render() {
        const { countryDetails, selectedTheme, themeOptions } = this.props;
        const { color } = themeOptions[selectedTheme];

        return (

            <button onClick={this.onClickCountryCard} value={countryDetails.name} className="country-card" style={{color: color}}>
                
                <div className="card-image">
                    <img className="flag-image" src={countryDetails.flag} alt={countryDetails.name}/>
                </div>
                
                <div className="card-content">
                    <span><strong>{countryDetails.name}</strong></span>
                    <span className="population-text"><strong>Population:</strong> {countryDetails.population}</span>
                    <span><strong>Region:</strong> {countryDetails.region}</span>
                    <span><strong>Capital:</strong> {countryDetails.capital}</span>
                </div>
            
            </button>
        );
    }
}

export default withRouter(CountryCard);
