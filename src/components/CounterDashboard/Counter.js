import React from 'react';

import { Header, ButtonsContainer, CounterContainer, IncrementButton, DecrementButton, CountText } from './counterStyles.js';

import { observer } from 'mobx-react';

import counterStore from '../../stores/CounterStore';

//URMINENGINEER
@observer
class Counter extends React.Component {

  getCount() {
    return counterStore.count;
  }

  incrementCounter = () => {

    counterStore.incrementCounter();
  }

  decrementCounter = () => {
    counterStore.decrementCounter();
  }

  onChangeCount = (e) => {
    counterStore.onChangeCount(e.target.value);
  }


  render() {
    return (
      <CounterContainer>  

                <Header>Counter</Header>
                
                <ButtonsContainer>
                    
                    <IncrementButton onClick={this.incrementCounter}> + </IncrementButton>
                    <input type="number" value={this.getCount()} onChange={this.onChangeCount} style={{ border: "1px solid orange"}, { textAlign: "center"}}/>
                    <DecrementButton onClick={this.decrementCounter}> - </DecrementButton>

                </ButtonsContainer>

        </CounterContainer>
    );
  }
}

export default Counter;


/*
import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'

import stores from '../../stores'
const counterStore = stores.counterStore

@observer
class CounterPage extends Component {
  handleIncrement = () => {
    counterStore.incrementCounter()
  }

  handleDecrement = () => {
    if (counterStore.count !== 0) {
      counterStore.decrementCounter()
    }
  }

  render() {
    return (
      <div>
        <h1>{counterStore.count}</h1>
        <button onClick={this.handleIncrement}>+</button>
        <button onClick={this.handleDecrement}>-</button>
      </div>
    )
  }
}

export default CounterPage
*/
