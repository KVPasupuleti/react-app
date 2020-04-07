import React from 'react';
import { GoSearch } from 'react-icons/go';

class SearchCountry extends React.PureComponent {
    state = {
        searchText: ""
    }

    onChangeSearchText = (e) => {
        this.setState({ searchText: e.target.value });
    }

    onSubmitSearchText = (e) => {

        const searchText = this.state.searchText;
        this.props.filterCountriesByName(searchText.trim());
        e.preventDefault();
    }

    render() {


        const { selectedTheme } = this.props;
        const { backgroundColor, color } = selectedTheme;

        return (
            <form onSubmit={this.onSubmitSearchText} className="search-country-container">
            
                <span className="search-symbol"><GoSearch /></span>
            
                <input onChange={this.onChangeSearchText} value={this.state.searchText} type="text" 
                placeholder="Search for a country" className="search-country" 
                style={{color:color , backgroundColor:backgroundColor}}/>
            
            </form>
        );
    }
}

export default SearchCountry;
