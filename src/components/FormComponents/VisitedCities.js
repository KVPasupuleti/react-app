import React from 'react';
import CheckBoxWithLabel from './CheckBoxWithLabel';
import NavBar from './NavBar';

class VisitedCities extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedCities: [],
            visitedCities: [],
            cityOptions: this.props.cityList
        };
    }



    handleCheckboxClick = (inputLabel, isChecked) => {
        let duplicateSelectedCities = this.state.selectedCities.slice(0);
        if (isChecked)
            duplicateSelectedCities.push(inputLabel);
        else {
            duplicateSelectedCities = this.state.selectedCities.filter(item => item !== inputLabel);
        }
        this.setState({ selectedCities: duplicateSelectedCities });
    }

    handleSubmit = (e) => {
        this.setState({ visitedCities: this.state.selectedCities });
        e.preventDefault();
    }

    renderCityOptions = () => {
        const cityOptions = this.state.cityOptions.map((eachCity, index) => {
            return <CheckBoxWithLabel key={index} label={eachCity} handleCheckboxClick={this.handleCheckboxClick}/>;
        });
        return cityOptions;
    }

    displayVisitedCitiesMessage = () => {
        if (this.state.visitedCities.length > 0)
            return (
                <p>I have visited {this.state.visitedCities.join(', ')}</p>
            );
    }

    render() {
        return (
            <div className="container">
            <NavBar title="Visited Cities"/>
            <form onSubmit={this.handleSubmit}>
                <p>Which of the following cities you have visited?</p>
                {this.renderCityOptions()}
                <button>Make your Choice</button>
                {this.displayVisitedCitiesMessage()}
            </form>
            </div>
        );
    }
}

export default VisitedCities;
