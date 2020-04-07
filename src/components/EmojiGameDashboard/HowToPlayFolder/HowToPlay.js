import React from 'react';
import { HowToPlayContainer, HowToPlayTitle, HowToPlayContent } from './howToPlayStyles.js';

class HowToPlay extends React.Component {
    render() {
        return (
            <HowToPlayContainer>
                <HowToPlayTitle>How to play?</HowToPlayTitle>
                <HowToPlayContent>Get points by clicking on an image but don't click on any image more than once!</HowToPlayContent>
            </HowToPlayContainer>
        );
    }
}

export default HowToPlay;
