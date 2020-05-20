import React from 'react';
import { withRouter } from 'react-router-dom';
import Header from './Header';
/*global fetch*/

class SingleCountryCard extends React.PureComponent {

    state = {
        country: JSON.parse(window.localStorage.getItem("country")),
        allCountries: []
    }

    borderId = 0;

    componentDidMount = () => {
        this.getCountries();
    }

    getCountries = async() => {
        const response = await fetch("https://restcountries.eu/rest/v2/all");
        const json = await response.json();

        this.setState({ allCountries: json });
    }


    navigate = () => {
        this.props.history.goBack();
    }

    onClickBorderCountry = (e) => {
        const alpha3Code = e.target.value;
        const allCountries = this.state.allCountries.slice(0);
        const selectedCountry = allCountries.filter(eachCountry => eachCountry.alpha3Code === alpha3Code);

        if (selectedCountry.length > 0) {
            this.setState({ country: selectedCountry[0] });
        }
    }

    onChangeTheme = (themeOption) => {
        this.props.onChangeTheme(themeOption);
    }

    getCurrenciesOrLanguages = (inputParam) => {
        const outputList = this.state.country[inputParam].map(eachParam => eachParam.name).join(', ');
        return outputList;
    }

    getBorderButtons = () => {
        if (this.state.allCountries.length > 0) {
            const { country } = this.state;
            const { selectedTheme } = this.props;
            const allCountries = this.state.allCountries.slice(0);

            const borderCountries = country.borders.map((eachBorder) => {
                const eachCountry = allCountries.filter((eachCountry) => eachCountry.alpha3Code === eachBorder);
                this.borderId += 1;

                return <button onClick={this.onClickBorderCountry} className={selectedTheme==="light"?"light-country-buttons":"dark-country-buttons"} key={this.borderId} value={eachBorder}>{eachCountry[0].name}</button>;
            });
            return borderCountries;
        }
    }

    render() {
        const { country } = this.state;
        const { selectedTheme } = this.props;
        const { backgroundColor, color } = selectedTheme;

        if (country === null)
            return null;

        return (

            <div className="single-country-wrapper" style={{color:color, backgroundColor:backgroundColor}}>
                
                <Header onChangeTheme={this.onChangeTheme}
                selectedTheme={selectedTheme} />
                
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
