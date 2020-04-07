import React from 'react';
import SearchCountry from './SearchCountry';
import SelectRegion from './SelectRegion';
import { Para } from './CSS.js';

class CountriesFilterBar extends React.Component {
    render() {

        console.log(this.props);

        const { filterCountriesByName, filterCountriesByRegion, selectedTheme } = this.props;
        return (
            <div className="countries-filter-bar">
                <Para>Test for Header</Para>
                <SearchCountry filterCountriesByName={filterCountriesByName}
                selectedTheme={selectedTheme}/>
        
                <SelectRegion filterCountriesByRegion={filterCountriesByRegion}
                selectedTheme={selectedTheme}  allCountries={this.props.allCountries}/>
        
            </div>
        );
    }
}

export default CountriesFilterBar;
