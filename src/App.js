import React, { Component } from 'react';
import classes from './App.css';
// import Radium from 'radium';
import Persons from './Persons/Persons';
import Cockpit from './Cockpit/Cockpit';
// import ErrorBoundary from './ErrorBoundary/ErrorBoundary'

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

    this.setState({persons: persons});
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
    style.backgroundColor = 'red';
    style[':hover'] = {
      backgroundColor: 'salmon',
      color: 'black'
    }
    let persons = null;
    if(this.state.showPersons){
      persons = (
        <Persons
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangeHandler}/>
      )
    }
    return (
      <div className={classes.App}>
        <Cockpit
        appTitle={this.props.appTitle}
        showPersons={this.state.showPersons}
        persons={this.state.persons}
        clicked={this.togglePersonsHandler}/>
        {persons}
      </div>
    );
    // return React.createElement('div', {className:'App'}, React.createElement('h1', null, "Hello it's a React App test"));
  }
}

export default App;
