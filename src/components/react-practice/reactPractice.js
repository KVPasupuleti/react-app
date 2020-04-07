import React from 'react';


class ReactPractice extends React.Component {

    constructor(props) {
        super(props);
        this.city = "";
    }

    handleChange = (event) => {
        this.city = event.target.value;
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.city);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} style={{marginTop: "30px"}}>
            <input type="text" value="Harika" onChange={this.handleChange}/>
            <button type="submit">Submit</button>
            </form>
        );
    }

}

export default ReactPractice;
