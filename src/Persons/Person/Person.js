import React, {Component} from 'react';
import classes from './Person.css';
import PropTypes from 'prop-types'
import {AuthContext} from '../../App';

class Person extends Component{
    constructor(props){
        super(props);
        //from 16.3.0 and up this makes 'ref={(self)=>{this.inputElement = self}}' -> ref={this.inputElement}
        //you also have to change 'this.inputElement.focus();' to 'this.inputElement.current.focus();'
        //due to this.inputElement is holding different states of it(by React)
        this.inputElement = React.createRef();
    }
    componentDidMount(){
        if(this.props.position === 0){
            this.inputElement.current.focus();
            //do not do as follows
            // this.inputElement.style.background = 'red'
        }
    }
    render(){
        return <div className={classes.Person}>
            <AuthContext.Consumer>
            {anything => anything ? <p>this is authenticated</p> : null}
            </AuthContext.Consumer>
            <p onClick={this.props.click}>I'm {this.props.name}, {this.props.age} years old!</p>
            <input 
            ref={this.inputElement}
            // ref={(self)=>{this.inputElement = self}}
            onChange={this.props.change} 
            value={this.props.name} />
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