import React from 'react';
import { Provider, inject, observer } from 'mobx-react';
import { observable, action } from 'mobx';

class A extends React.Component {
    render() {
        return (
            <Provider temp={"It's really a long journey from A to E"}>
                <B/>
            </Provider>
        );
    }

}


@inject('temp')
@observer
class B extends React.Component {

    @observable name

    onChange = (e) => {
        this.name = e.target.value;
    }

    render() {
        return (
            <div>
                <input value={this.name} onChange={this.onChange} style={{borderColor: "blue"}}/>
                <C name={this.name} temp={"Hello World"}/>
            </div>
        );
    }
}


@inject('temp')
@observer
class C extends React.Component {
    render() {
        const { temp, name } = this.props;
        console.log(temp, name);
        return (
            <D/>
        );
    }
}

class D extends React.Component {
    render() {
        return (
            <E/>
        );
    }
}


@inject("temp")
class E extends React.Component {
    render() {
        return (
            <div>{this.props.temp}</div>
        );
    }
}



export default A;
