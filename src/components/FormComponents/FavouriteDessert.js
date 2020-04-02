import React from 'react';
import DessertOptions from './DessertOptions';
import NavBar from './NavBar';

class FavouriteDessert extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDessert: "",
            favouriteDessert: ""
        };
    }


    handleSubmit = (e) => {
        this.setState({ favouriteDessert: this.state.selectedDessert });
        e.preventDefault();
    }

    handleUserInput = (e) => {
        this.setState({ selectedDessert: e.target.value });
    }

    renderDessertOptions = (dessertList) => {
        const dessertOptions = dessertList.map((eachDessert, index) => {
            return <DessertOptions key={index} id={this.id} eachDessert={eachDessert}/>;
        });
        console.log(dessertOptions);
        return dessertOptions;
    }

    displayMessage = () => {
        if (this.state.favouriteDessert !== "")
            return (
                <p>My favourite Dessert is {this.state.favouriteDessert.toUpperCase()}</p>
            );
    }

    render() {
        return (
            <div className="container">
            <NavBar title="Favourite Dessert"/>
            <form onSubmit={this.handleSubmit}>
            <label>
            <p>What is your favourite Dessert?</p>
            <div onChange={this.handleUserInput}>
            {this.renderDessertOptions(this.props.dessertList)}
            </div>
            <button>Submit</button>
            {this.displayMessage()}
            </label>
            </form>
            </div>
        );
    }
}

export default FavouriteDessert;
