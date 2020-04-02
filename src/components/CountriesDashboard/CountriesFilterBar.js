import React from 'react';
import SearchCountry from './SearchCountry';
import SelectRegion from './SelectRegion';

class CountriesFilterBar extends React.Component {
    render() {
        const { filterCountriesByName, filterCountriesByRegion, selectedTheme, themeOptions } = this.props;
        return (
            <div className="countries-filter-bar">
        
                <SearchCountry filterCountriesByName={filterCountriesByName}
                selectedTheme={selectedTheme} themeOptions={themeOptions}/>
        
                <SelectRegion filterCountriesByRegion={filterCountriesByRegion} themeOptions={themeOptions}
                selectedTheme={selectedTheme}  allCountries={this.props.allCountries}/>
        
            </div>
        );
    }
}

export default CountriesFilterBar;
