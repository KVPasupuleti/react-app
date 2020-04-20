import React, { Component } from 'react';
import { observable, action } from 'mobx';
import { observer } from 'mobx-react';

type PersonKeys = {
    firstName: string,
    lastName: string,
    age: number,
    hobbies: string
}

type RpProps = {
    Person: PersonKeys
}

@observer
class ReactPractice extends Component<RpProps> {

    @observable name = "vamsi"

    @action.bound
    changeName() {
        this.name = "Ismav"
    }

    renderArrayMethods = () => {
        let defaultTodos = new XMLHttpRequest()

        fetch("https://todo-list-1.getsandbox.com/todos", {
            method: "GET", 
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        }).then(response => response.json()).then(json => console.log(json))
    }

    render() {
        return(
        <div>
            <p>{this.name}</p>
            <button onClick={this.renderArrayMethods}>Render Arrays</button>    
            {this.renderArrayMethods()}
        </div>
        );
    }

    /*
    name1: String
    name2: String

    static defaultProps = {
        hobbies:"Eating"
    }

    constructor(props) {
        super(props)
        this.name1 = "Laxmi Satya Prasanna"
        this.name2 = "Krishna Vamsi"
    }

    addNumbers = (num1: 1 | 2 | 5, num2: string): any => {
        let sum = num1 + num2;
        return sum;
    }

    printPerson = (p: PersonKeys) => {       
        console.log(p.hobbies);
    }

    render() {
    
        const { Person } = this.props
        console.log(Person.age)
        return(
        <div>
            <p>Team FEDup</p>
            
        </div>
        );
    }
    */
}

export default ReactPractice;


/*
import React from 'react';
import { Provider, inject, observer } from 'mobx-react';
import { observable } from 'mobx';

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

*/