import React, { Component } from 'react';
import axios from 'axios';
const Context = React.createContext();


const reducer = (state, action) => { // action is an object that will have a type, type is evaluated to figure out what we will be doing
    switch(action.type){
        case 'DELETE_CONTACT':
            return {
                ...state, 
                contacts: state.contacts.filter(contact => contact.id !== action.payload)
            };
        case 'ADD_CONTACT':
            return {
                ...state, 
                contacts: [action.payload, ...state.contacts] // payload includes id, name,email,phone
            };
        case 'UPDATE_CONTACT':
            return {
                ...state, 
                contacts: state.contacts.map
                    (contact => 
                        contact.id === action.payload.id ? ( contact = action.payload ) : contact) // payload includes id, name,email,phone
            };
        default: 
            return state;
    }
};

export class Provider extends Component {
    state = {
        contacts: [],

        dispatch: action => {
            this.setState(state => reducer(state, action))
        }
    };

    async componentDidMount(){
     const response = await axios.get('http://jsonplaceholder.typicode.com/users');

     this.setState({
         contacts: response.data
     });
           
    };

    render(){
        return(
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;