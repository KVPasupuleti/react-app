import React from 'react';

class NoOfItemsLeft extends React.PureComponent {
    render() {
        return (
            <span className="no-of-items-left-count">  {this.props.itemsLeft} items left</span>
        );
    }
}

export default NoOfItemsLeft;
