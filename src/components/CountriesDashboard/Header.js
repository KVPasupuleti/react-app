import React from 'react';
import { FaRegMoon } from 'react-icons/fa';

class Header extends React.Component {

    onChangeTheme = () => {

        const themeOption = this.props.selectedTheme === "light" ? "dark" : "light";
        window.localStorage.setItem("selectedTheme", themeOption);

        if (this.props.hasOwnProperty("onChangeTheme"))
            this.props.onChangeTheme(themeOption);
        else
            this.props.onChangeSingleCountryTheme(themeOption);
    }

    render() {
        const { selectedTheme, themeOptions } = this.props;
        const { color } = themeOptions[selectedTheme];

        return (
            <div className="countries-dashboard-header">
            <span style={{ color : color}} className="header-text"><strong>Where in the world?</strong></span>
            <button onClick={this.onChangeTheme} className="theme-mode"  style={{ color : color}}><FaRegMoon />  <strong>{themeOptions[selectedTheme].displayText}</strong></button> 
        </div>
        );
    }
}

export default Header;
