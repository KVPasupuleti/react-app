import React from 'react';
import Header from './Header';
import CountriesFilterBar from './CountriesFilterBar';
import Countries from './Countries';
import NavBar from '../FormComponents/NavBar';
import './CountriesDashboardApp.css';
/* global fetch*/

class CountriesDashboardApp extends React.Component {

    state = {
        countries: [],
        selectedTheme: "light",
        searchText: "",
        selectedRegion: "All",
        loadingText: "Loading...."
    }

    themeOptions = {
        light: {
            id: "0",
            name: "light",
            color: "black",
            backgroundColor: "#fff",
            displayText: "Light Mode"
        },
        dark: {
            id: "1",
            name: "dark",
            color: "white",
            backgroundColor: "#2b3945",
            displayText: "Dark Mode"
        }
    }

    allCountries = [];

    componentDidMount = () => {
        this.setState({ selectedTheme: window.localStorage.getItem("selectedTheme") });
        this.getCountries();
    }

    getCountries = () => {
        setTimeout(() => {
            fetch("https://restcountries.eu/rest/v2/all").then(response => {
                    return response.json();
                })
                .then(json => {
                    this.allCountries = json;
                    this.setState({ countries: this.allCountries, loadingText: "" });
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
            errorText = "Invalid Input";
        else
            errorText = "";

        console.log(countriesList, errorText);
        this.setState({ countries: countriesList, searchText: searchText, loadingText: errorText });
    }

    onChangeTheme = (themeOption) => {
        this.setState({ selectedTheme: themeOption });
    }

    render() {
        const { countries, selectedTheme } = this.state;
        console.log(this.themeOptions[selectedTheme]);
        const { backgroundColor } = this.themeOptions[selectedTheme];
        return (
            <div className="countries-dashboard-container" style={{backgroundColor: backgroundColor}}>
            
                <NavBar title="Countries Dashboard App"/>
                <div  className="container">
            
                <Header selectedTheme={selectedTheme} onChangeTheme={this.onChangeTheme} themeOptions={this.themeOptions}/>
            
                <hr className="header-line" ></hr>
            
                <CountriesFilterBar filterCountriesByName={this.filterCountriesByName}
                filterCountriesByRegion={this.filterCountriesByRegion} themeOptions={this.themeOptions}
                selectedTheme={this.state.selectedTheme}  allCountries={this.allCountries}/>
            
                <Countries countries={countries} selectedTheme={this.state.selectedTheme}
                filterCountriesByClick={this.filterCountriesByClick} 
                allCountries={this.allCountries} themeOptions={this.themeOptions}/>
                <p className="loading-text">{this.state.loadingText}</p>
                </div>
            
            </div>
        );
    }
}

export default CountriesDashboardApp;
