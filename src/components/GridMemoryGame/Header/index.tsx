import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { HeaderContainer, LevelAndButtonContainer, TopLevelText, LevelText, ThemeButton } from './styles';

type HeaderProps = {
    level: number
    topLevel: number
    selectedTheme: string
    onChangeSelectedTheme: (themeOption: string) => void
}

@observer
class Header extends Component<HeaderProps> {
    
    onChangeSelectedTheme = () => {
        const { onChangeSelectedTheme, selectedTheme } = this.props
        const themeOption:string = selectedTheme==="Light"?"Dark":"Light";
        onChangeSelectedTheme(themeOption);
    }

    render() {
        const { level, topLevel, selectedTheme } = this.props;
        return(
            <HeaderContainer>
                <TopLevelText>Top Level: {topLevel}</TopLevelText>
                <LevelAndButtonContainer>
                    <LevelText>Level: {level}</LevelText>
                    <ThemeButton onClick={this.onChangeSelectedTheme} selectedTheme={selectedTheme}>Mode: {selectedTheme}</ThemeButton>
                </LevelAndButtonContainer>
            </HeaderContainer>
        )
    }
}

export const ThemeButtonComponent = (props) => {
    const { children, onClick } = props;
    return <ThemeButton onClick={onClick} selectedTheme="Light">{children}</ThemeButton>
}

export default Header;