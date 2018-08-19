import React, { Component } from 'react';
import './App.css';
import Radium, {StyleRoot} from 'radium';
import Person from './Person/Person';

class App extends Component {
  //this is special variable extended from compenent
  //when ever it is changed it automatically updates the webpage
  state = {
    persons: [
      { id:'aslkdjf', name: 'Minsi', age: 29},
      { id:'3jk4h', name: 'MS', age: 31},
      { id:'1ikl2jhr', name: 'Salinger', age: 21},
      { id:'12klj3h', name: 'Granma', age: 62}
    ]
  }
  // switchNameHandler = (newName) => {
  //   console.log('switchNameHandler run')
  //   //don't : this.state.persons[0].name = 'MinSeongKim'
  //   // -> this will not work in ES6 => syntax
  //   //because this refers to the function you are wrinting code in
  //   newName = newName ? newName : 'SalingerMS'

  //   this.setState({
  //     persons: [
  //       { name: newName, age: 29},
  //       { name: 'MS', age: 31},
  //       { name: 'Salinger', age: 21},
  //       { name: 'Granma', age: 99}
  //     ],
  //     showPersons: false
  //   })
  // }

  nameChangeHandler = (event, id) => {
    console.log('nameChangeHandler run')
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })

    const person = {...this.state.persons[personIndex]};
    //or const person = Object.assign({}, this.state.persons[personIndex])

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons})
  }

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons.slice();
    // or const persons = [...this.state.persons]
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    }
  //this is first way of conditionally rendering parts
    let persons = null;
  // map() executes the given function to every array value
    if(this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person, index)=>{
            return <Person
            click={()=>this.deletePersonHandler(index)}
            name={person.name}
            age={person.age}
            key={person.id}
            change={(event)=>this.nameChangeHandler(event, person.id)}/>
          })}
          {/* <Person
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
            age={this.state.persons[3].age}/> */}
        </div>
      );
      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
    }

    return (
      <StyleRoot>
      <div className="App">
        <h1>Hello it's a React App test</h1>
        <p>This is working</p>
        <button 
          style = {style}
          onClick={()=>this.togglePersonsHandler()}>Show</button>
        {persons}
      </div>
      </StyleRoot>
    );
    // return React.createElement('div', {className:'App'}, React.createElement('h1', null, "Hello it's a React App test"));
  }
}

export default Radium(App);
