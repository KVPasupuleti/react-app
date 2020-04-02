import React from 'react';
import NavBar from './NavBar';
import { withRouter } from 'react-router-dom';

class Greetings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInputText: "",
            displayName: "",
        };
    }

    handleUserInput = (event) => {
        this.setState({ userInputText: event.target.value });
    }

    handleSubmit = (e) => {
        this.setState({ displayName: this.state.userInputText, userInputText: "" });
        e.preventDefault();
    }

    displayMessage = () => {
        if (this.state.displayName !== "")
            return (
                <p>Hello {this.state.displayName}, have a nice day!</p>
            );
    }

    navigateBack = () => {
        const { history } = this.props;
        history.goBack();
    }

    render() {
        return (
            <div className="container">
            <NavBar title="Greetings"/>
            <form onSubmit={this.handleSubmit}>
                <label>
                    <input value={this.state.userInputText} onChange={this.handleUserInput}/>
                    <button type="submit">Greet</button>
                    {this.displayMessage()}
                </label>
            </form>
            </div>
        );
    }
}

export default withRouter(Greetings);
