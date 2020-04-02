import React from 'react';
import NoOfItemsLeft from './noOfItemsLeft';

class Footer extends React.Component {

    render() {
        return (
            <div className={this.props.footerVisibility === true?"footer":"hidden-footer"}>
                <NoOfItemsLeft itemsLeft={this.props.noOfItemsLeft}/>
                <div className="filter-buttons">
                <button name="all" onClick={this.props.handleFooter} className={(this.props.currentStatus==="all")?"active-button":"inactive-button"}>All</button>
                <button name="active" onClick={this.props.handleFooter} className={(this.props.currentStatus==="active")?"active-button":"inactive-button"}>Active</button>
                <button name="completed" onClick={this.props.handleFooter} className={(this.props.currentStatus==="completed")?"active-button":"inactive-button"}>Completed</button>
                </div>
                <button name="clearCompleted" onClick={this.props.handleFooter} className={this.props.noOfItemsLeft === this.props.totalNoOfItems?"hidden-clear-completed-button":"visible-clear-completed-button"}>Clear Completed</button>
            </div>
        );
    }
}

export default Footer;
