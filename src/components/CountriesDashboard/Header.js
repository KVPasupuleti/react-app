import React from 'react';
import { FaRegMoon } from 'react-icons/fa';

class Header extends React.PureComponent {

    onChangeTheme = () => {

        const themeOption = this.props.selectedTheme === "light" ? "dark" : "light";
        this.props.onChangeTheme(themeOption);
    }

    render() {

        const { selectedTheme } = this.props;
        const { color } = selectedTheme;

        return (
            <div className="countries-dashboard-header">
            <span style={{ color : color}} className="header-text"><strong>Where in the world?</strong></span>
            <button onClick={this.onChangeTheme} className="theme-mode"  style={{ color : color}}><FaRegMoon />  <strong>{selectedTheme.displayText}</strong></button> 
        </div>
        );
    }
}

export default Header;
