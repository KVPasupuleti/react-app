import React from 'react';

class DessertOptions extends React.Component {
    render() {
        return (
            <div>
            <input type="radio" id={this.id} name="dessert" value={this.props.eachDessert}/>
            <label>{this.props.eachDessert}</label>
            </div>
        );
    }
}

export default DessertOptions;
