import React from 'react';
import NavBar from './NavBar';



class YourState extends React.Component {
    state = {
        selectedState: "Select your state",
        submittedState: ""
    }

    id = 0;

    handleChangeState = (event) => {
        this.setState({ selectedState: event.target.value });
    }

    handleSubmit = (e) => {
        this.setState({ submittedState: this.state.selectedState });
        e.preventDefault();
    }

    displayMessage = () => {
        if (this.state.submittedState !== "")
            return (
                <p>I am from "{this.state.submittedState}"</p>
            );
    }

    render() {
        return (
            <div className="container">
            <NavBar title="Your State"/>
            <form onSubmit={this.handleSubmit}>
            <select value={this.state.selectedState} onChange={this.handleChangeState}>
                {this.props.stateList.map((eachState, index) => {
                this.id += 1;
                return <option key={this.id} value={eachState}>{eachState}</option>;
                }
                )}
            </select>
            <button>Submit</button>    
            {this.displayMessage()}
            </form>
            </div>
        );
    }
}

export default YourState;
