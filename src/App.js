import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  //this is special variable extended from compenent
  //when ever it is changed it automatically updates the webpage
  state = {
    persons: [
      { name: 'Minsi', age: 29},
      { name: 'MS', age: 31},
      { name: 'Salinger', age: 21},
      { name: 'Granma', age: 62}
    ]
  }
switchNameHandler = () => {
  console.log('switchNameHandler run')
  //don't : this.state.persons[0].name = 'MinSeongKim'
  // -> this will not work in ES6 => syntax
  //because this refers to the function you are wrinting code in
  this.setState({
    persons: [
      { name: 'SalingerMS', age: 29},
      { name: 'MS', age: 31},
      { name: 'Salinger', age: 21},
      { name: 'Granma', age: 99}
    ]
  })
}

  render() {
    return (
      <div className="App">
        <h1>Hello it's a React App test</h1>
        <p>This is working</p>
        <button onClick={this.switchNameHandler}>Switch</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>Hello is MinSeong</Person>
        <Person name={this.state.persons[3].name} age={this.state.persons[3].age}/>
      </div>
    );
    // return React.createElement('div', {className:'App'}, React.createElement('h1', null, "Hello it's a React App test"));
  }
}

export default App;
