import React, {Component} from 'react';
import classes from './Person.css';
import PropTypes from 'prop-types'

class Person extends Component{
    render(){
        return <div className={classes.Person}>
            <p onClick={this.props.click}>I'm {this.props.name}, {this.props.age} years old!</p>
            <input onChange={this.props.change} value={this.props.name} />
        </div>
    }
};
//타입스크립트 같은 역할 하면서 받는 자료형을 에러로 띄워줌 되면 되는데 에러로 알려줌
//https://reactjs.org/docs/typechecking-with-proptypes.html 더 많은 프롭타입
Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default Person;