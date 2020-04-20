import React, { Component } from 'react';


class LoadingView extends Component {
    render() {
        return(
        <div style={{height: "500px", display: "flex", alignItems: "center", justifyContent: "center"}}>
            <span style={{fontSize: "50px"}}>LOADING....</span>
        </div>  
        );
    }
}

export default LoadingView;