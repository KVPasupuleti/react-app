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

        const regions = (allRegions.map((eachRegion) => {
            this.id += 1;
            return <option key={this.id} value={eachRegion}>{eachRegion}</option>;
        }));
        return regions;
    }

    render() {
        const { selectedTheme } = this.props;
        const { color } = selectedTheme;

        return (
            <select className="select-region" value={this.state.selectedRegion} onChange={this.onChangeSelectedRegion} style={{color:color}}>
            {this.getOptions()}    
            </select>
        );
    }
}

export default SelectRegion;
