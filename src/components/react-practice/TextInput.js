import React from 'react';

export default class TextInput extends React.Component {
    // inputRef = React.createRef()
    render(){
        console.log("text input render called")
    return(
        <div>
        <input ref={this.props.textInputRef} type="text" style={{border: "2px solid yellow"}}/>
    </div>
    )
    }
}