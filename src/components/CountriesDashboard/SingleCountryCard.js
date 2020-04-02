import React from 'react';
import { withRouter } from 'react-router-dom';
import Header from './Header';

class SingleCountryCard extends React.Component {

    state = {
        country: JSON.parse(window.localStorage.getItem("country")),
        selectedTheme: window.localStorage.getItem("selectedTheme")
    }

    id = 0;

    navigate = () => {
        this.props.history.goBack();
    }

    onClickBorderCountry = (e) => {
        const alpha3Code = e.target.value;
        const allCountries = JSON.parse(window.localStorage.getItem("allCountries"));
        const selectedCountry = allCountries.filter(eachCountry => eachCountry.alpha3Code === alpha3Code);
        
        if (selectedCountry.length > 0) {
            this.props.history.push(`country-dashboard-app/details/${selectedCountry[0].alpha3Code}`);
            this.setState({ country: selectedCountry[0] });
        }
    }

    onChangeSingleCountryTheme = (themeOption) => {
        window.localStorage.setItem("selectedTheme", themeOption);
        this.setState({ selectedTheme: themeOption });
    }

    getCurrenciesOrLanguages = (inputParam) => {
        const outputList = this.state.country[inputParam].map(eachCurrency => eachCurrency.name).join(', ');
        return outputList;
    }

    getBorderButtons = () => {
        const { country, selectedTheme } = this.state;
        const allCountries = JSON.parse(window.localStorage.getItem("allCountries"));
        const borderCountries = country.borders.map((eachBorder) => {
            const eachCountry = allCountries.filter((eachCountry) => eachCountry.alpha3Code === eachBorder);
            this.id += 1;
            if (eachCountry.length > 0)
                return <button onClick={this.onClickBorderCountry} className={selectedTheme==="light"?"light-country-buttons":"dark-country-buttons"} key={this.id} value={eachBorder}>{eachCountry[0].name}</button>;
        });
        return borderCountries;
    }

    render() {
        const { country, selectedTheme } = this.state;
        const themeOptions = JSON.parse(window.localStorage.getItem("themeOptions"));
        const { backgroundColor, color } = themeOptions[selectedTheme];
        return (

            <div className="single-country-wrapper" style={{color:color, backgroundColor:backgroundColor}}>
                
                <Header onChangeSingleCountryTheme={this.onChangeSingleCountryTheme}
                selectedTheme={selectedTheme} themeOptions={themeOptions}/>
                
                <hr className="header-line" ></hr>
                                
                <button onClick={this.navigate} className="countries-back-button" style={{color:color}}>Go Back</button>
                
                <div className="single-country-container">
                    
                    <div className="single-country-image">
                        <img className="single-flag-image" src={country.flag} alt={country.name}/>
                    </div>
                    
                    <div className="single-country-text">
                        <p style={{color:color}}><strong>{country.name}</strong></p>
                        <div className="single-country-text-wrapper">
                            
                            <div className="single-country-text-left" style={{color:color}}>
                                <span><strong>Native Name:</strong> {country.nativeName}</span>
                                <span><strong>Population:</strong> {country.population}</span>
                                <span><strong>Region:</strong> {country.region}</span>
                                <span><strong>Sub Region:</strong> {country.subregion}</span>
                                <span><strong>Capital:</strong> {country.capital}</span>
                            </div>
                            
                            <div className="single-country-text-right" style={{color:color}}>
                                <span><strong>Top Level Domain:</strong> {country.topLevelDomain[0]}</span>
                                
                                <span><strong>Currencies:</strong> {this.getCurrenciesOrLanguages("currencies")}</span>
                                
                                <span><strong>Languages:</strong> {this.getCurrenciesOrLanguages("languages")}</span>
                            
                            </div>
                        
                        </div>
                        
                        <div>
                            <p style={{color:color}}><strong>Border Countries:</strong></p>
                            <div className="border-countries-container">{this.getBorderButtons()}</div>
                        </div>
                    
                    </div>
                
                </div>
            </div>
        );
    }
}

export default withRouter(SingleCountryCard);
