import React, { Component } from 'react';

const person = (props) => {
    return (
        <div>
            <p>I'm {props.name}, {props.age} years old!</p>
            {props.children}
        </div>
    )
}

export default person;