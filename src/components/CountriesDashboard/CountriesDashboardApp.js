import React from 'react';
import Header from './Header';
import CountriesFilterBar from './CountriesFilterBar';
import Countries from './Countries';
import NavBar from '../FormComponents/NavBar';
import './CountriesDashboardApp.css';
import { CountriesContainer, Paragraph } from './CSS.js';
import withCountries from '../../common/hocs/withCountries';
/* global fetch*/

class CountriesDashboardApp extends React.Component {

        state = {
        countries: [],
        searchText: "",
        selectedRegion: "All",
        loadingText: "Loading...."
    }
    
    allCountries = [];
    

    componentDidMount() {
        this.getCountries();
    }

    getCountries = async() => {

        await setTimeout(() => {
            fetch("https://restcountries.eu/rest/v2/all").then(response => {
                    return response.json();
                })
                .then(json => {
                    this.allCountries = json;
                    this.setState({ countries: this.allCountries });
                });
        }, 1000);
    }

    filterCountriesByRegion = (selectedRegion) => {
        let countriesList;
        if (this.state.searchText === "" && selectedRegion === "All")
            countriesList = this.allCountries.slice(0);
        else if (this.state.searchText === "")
            countriesList = this.allCountries.filter(eachCountry => eachCountry.region === selectedRegion);
        else if (selectedRegion === "All")
            countriesList = this.allCountries.filter(eachCountry => eachCountry.name.toLowerCase().includes(this.state.searchText.toLowerCase()));
        else
            countriesList = this.allCountries.filter(eachCountry => eachCountry.region === selectedRegion && eachCountry.name.toLowerCase().includes(this.state.searchText.toLowerCase()));

        this.setState({ countries: countriesList, selectedRegion: selectedRegion });
    }

    filterCountriesByName = (searchText) => {
        let countriesList;
        if (searchText === "" && this.state.selectedRegion !== "All")
            countriesList = this.allCountries.filter(eachCountry => eachCountry.region === this.state.selectedRegion);
        else if (this.state.selectedRegion === "All")
            countriesList = this.allCountries.filter(eachCountry => eachCountry.name.toLowerCase().includes(searchText.toLowerCase()));
        else
            countriesList = this.allCountries.filter(eachCountry => eachCountry.name.toLowerCase().includes(searchText.toLowerCase()) && eachCountry.region === this.state.selectedRegion);

        let errorText = "";

        if (countriesList.length === 0)
            errorText = "No Country Found";
        else
            errorText = "";

        console.log(countriesList, errorText);
        this.setState({ countries: countriesList, searchText: searchText, loadingText: errorText });
    }

    onChangeTheme = (themeOption) => {
        this.props.onChangeTheme(themeOption);
    }

    render() {
        // this.allCountries = this.props.countries
        /*
                if (this.props.selectedTheme === null)
                    return;
        */
    
        const { countries } = this.state;
        const { selectedTheme } = this.props;
        // const selectedTheme = "dark"
        const { backgroundColor } = selectedTheme;


        return (

            <div className="countries-dashboard-container" style={{backgroundColor: backgroundColor}}>
            
                <NavBar title="Countries Dashboard App"/>
                
                <CountriesContainer>
            
                <Header selectedTheme={selectedTheme} onChangeTheme={this.onChangeTheme} />
            
                <Paragraph >Checking Emotion and Tailwind</Paragraph>
            
                <hr className="header-line" ></hr>
            
                <CountriesFilterBar filterCountriesByName={this.filterCountriesByName}
                filterCountriesByRegion={this.filterCountriesByRegion} 
                selectedTheme={selectedTheme}  allCountries={this.allCountries}/>
            
                <Countries countries={countries} selectedTheme={selectedTheme}
                filterCountriesByClick={this.filterCountriesByClick} 
                allCountries={this.allCountries} />
                <p className="loading-text">{this.state.loadingText}</p>
                </CountriesContainer>
            
            </div>

        );
    }
}


export default CountriesDashboardApp;
