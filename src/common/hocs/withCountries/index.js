import React, { Component } from 'react'
import { observer } from 'mobx-react';
import { observable } from 'mobx';

@observer
export default function withCountries(WrappedComponent) {
return class extends Component {

    @observable countries = []

    componentDidMount() {
        this.getCountries()
    }

    getCountries = async() => {
        const response = await fetch("https://restcountries.eu/rest/v2/all");
        const json = await response.json();
        this.countries = json
    }

    render() {
        if(this.countries === null)
            return <div>Loading</div>
        return (
            <div>
                <WrappedComponent countries={this.countries}/>
            </div>
        )
    }
}
}