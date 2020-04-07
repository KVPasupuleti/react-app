import React from 'react';
import { EmojiCardButton, EmojiImage, EmojiName } from './emojiCardStyles.js';

class EmojiCard extends React.Component {


    onEmojiClick = () => {
        const { onEmojiClick, emoji } = this.props;
        onEmojiClick(emoji);
    }

    render() {
        const { emoji, selectedTheme } = this.props;
        return (
            <EmojiCardButton onClick={this.onEmojiClick} selectedTheme={selectedTheme}>
                <EmojiImage src={emoji.image} alt={emoji.name}/>
                <EmojiName>{emoji.name}</EmojiName>
            </EmojiCardButton>
        );
    }
}

export default EmojiCard;
