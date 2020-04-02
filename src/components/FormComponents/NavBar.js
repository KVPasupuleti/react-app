import React from 'react';
import '../../App.css';
import { withRouter } from 'react-router-dom';

class NavBar extends React.Component {

    navigateBack = () => {
        const { history } = this.props;
        history.goBack();
    }

    render() {
        return (
            <div className="nav-bar">
            <button onClick={this.navigateBack} className="back-button">GoBack</button>
            <span>{this.props.title}</span>
            </div>
        );
    }
}

export default withRouter(NavBar);
