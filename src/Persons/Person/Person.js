import React from 'react';
import classes from './Person.css';

const person = (props) => (
        <div className={classes.Person} onClick={props.click}>
            <p>I'm {props.name}, {props.age} years old!</p>
            <p> {props.children} </p>
            <input onChange={props.change} value={props.name} />
        </div>
    )

export default person;