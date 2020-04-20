import React, { Component } from 'react';


class Failure extends Component {

    getToDosFromServer = () => {
        const { getToDosFromServer } = this.props
        getToDosFromServer("https://jsonplaceholder.typicode.com/posts");
    }

    render() {
        return(
        <div style={{height: "500px", display: "flex", flexDirection:"column", alignItems: "center", justifyContent: "center"}}>
            <p>Network Error</p>
            <button onClick={this.getToDosFromServer} style={{backgroundColor: "blue", color: "white"}}>Retry</button>
        </div>  
        );
    }
}

export default Failure;