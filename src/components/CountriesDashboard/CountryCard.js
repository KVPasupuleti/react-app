import React from 'react';
import { withRouter } from 'react-router-dom';
import { CardImage, CardContent, FlagImage } from './CSS.js';

class CountryCard extends React.PureComponent {

    onClickCountryCard = () => {

        const { countryDetails } = this.props;

        window.localStorage.setItem("country", JSON.stringify(countryDetails));

        this.props.history.push(`country-dashboard-app/details/${countryDetails.alpha3Code}`);
    }

    render() {

        const { countryDetails, selectedTheme } = this.props;
        const { color } = selectedTheme;

        return (

            <button onClick={this.onClickCountryCard} value={countryDetails.name} className="country-card" style={{color: color}}>
                
                <CardImage>
                    <FlagImage src={countryDetails.flag} alt={countryDetails.name}/>
                </CardImage>
                
                <CardContent>
                    <span><strong>{countryDetails.name}</strong></span>
                    <span className="population-text"><strong>Population:</strong> {countryDetails.population}</span>
                    <span><strong>Region:</strong> {countryDetails.region}</span>
                    <span><strong>Capital:</strong> {countryDetails.capital}</span>
                </CardContent>
            
            </button>
        );
    }
}

export default withRouter(CountryCard);
