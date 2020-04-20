import React, { Component } from 'react';


class NoData extends Component {
    render() {
        return(
        <div style={{height: "500px", display: "flex", alignItems: "center", justifyContent: "center"}}>
            <span>NoData Found</span>
        </div>  
        );
    }
}

export default NoData;