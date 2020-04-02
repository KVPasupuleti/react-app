import React from 'react';

class SelectRegion extends React.Component {
    state = {
        selectedRegion: "All",
    }

    id = 0;

    onChangeSelectedRegion = (e) => {
        this.setState({ selectedRegion: e.target.value });
        this.props.filterCountriesByRegion(e.target.value);
    }

    getOptions = () => {
        const { allCountries } = this.props;
        
        let allRegions = allCountries.map(eachCountry => eachCountry.region);
        
        allRegions = [...new Set(allRegions)];
        allRegions.unshift("All");
        
        const regions = (allRegions.map((eachRegion, index) => {
            return <option key={index} value={eachRegion}>{eachRegion}</option>;
        }));
        return regions;
    }

    render() {
        const { selectedTheme, themeOptions } = this.props;
        const { color } = themeOptions[selectedTheme];

        return (
            <select className="select-region" onChange={this.onChangeSelectedRegion} style={{color:color}}>
            {this.getOptions()}    
            </select>
        );
    }
}

export default SelectRegion;
