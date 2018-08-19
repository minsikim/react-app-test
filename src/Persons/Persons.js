import React, {Component} from 'react';
import Person from './Person/Person';


class Persons extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        console.log(this.props.authenticated)
    }
    render(){
        return <div>
            {this.props.persons.map((person, index)=>{
            return <Person
            click={()=>this.props.clicked(index)}
            name={person.name}
            age={person.age}
            // ref={this.lastPersonRef}
            // authenticated={this.props.authenticated}
            key={person.id}
            position={index}
            change={(event)=>this.props.changed(event, person.id)}/>
            })}
        </div>;
    }
}

export default Persons;