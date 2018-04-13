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
switchNameHandler = (newName) => {
  console.log('switchNameHandler run')
  //don't : this.state.persons[0].name = 'MinSeongKim'
  // -> this will not work in ES6 => syntax
  //because this refers to the function you are wrinting code in
  newName = newName ? newName : 'SalingerMS'

  this.setState({
    persons: [
      { name: newName, age: 29},
      { name: 'MS', age: 31},
      { name: 'Salinger', age: 21},
      { name: 'Granma', age: 99}
    ],
    showPersons: false
  })
}

nameChangeHandler = (event) => {
  console.log('nameChangeHandler run')
  this.setState(
    {
      persons: [
        { name: 'Minsi', age: 29},
        { name: event.target.value, age: 31},
        { name: 'Salinger', age: 21},
        { name: 'Granma', age: 99}
      ]
    }
  )
}

togglePersonsHandler = () => {
  const doesShow = this.state.showPersons;
  this.setState({showPersons: !doesShow})
}

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px'
    }
    return (
      <div className="App">
        <h1>Hello it's a React App test</h1>
        <p>This is working</p>
        <button 
          style = {style}
          onClick={()=>this.togglePersonsHandler()}>Show</button>
        { this.state.showPersons ? 
          <div>
            <Person
              name={this.state.persons[0].name}
              age={this.state.persons[0].age}/>
            <Person
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}
              change={this.nameChangeHandler}/>
            <Person
            //if you need to pass on params on the click method you can
            // 1. bind(this, params) or
            // 2. ()=>function()
            // #1 is better
              click = {this.switchNameHandler.bind(this, 'something')}
              name={this.state.persons[2].name}
              age={this.state.persons[2].age}>Hello is MinSeong</Person>
            <Person
              name={this.state.persons[3].name}
              age={this.state.persons[3].age}/>
          </div> : null
        }
      </div>
    );
    // return React.createElement('div', {className:'App'}, React.createElement('h1', null, "Hello it's a React App test"));
  }
}

export default App;
