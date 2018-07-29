import React, { Component } from 'react';
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
        default: 
            return state;
    }
};

export class Provider extends Component {
    state = {
        contacts: [
            {
                id: 1,
                name: 'John Doe',
                email: 'jdoe@gmail.com',
                phone: '456-677-8880' 
            },
            {
                id: 2,
                name: 'Karen Williams',
                email: 'karen@gmail.com',
                phone: '333-447-0033' 
            },
            {
                id: 3,
                name: 'Henry Johnson',
                email: 'henry@gmail.com',
                phone: '123-777-0459' 
            },

        ],
        dispatch: action => {
            this.setState(state => reducer(state, action))
        }
    }

    render(){
        return(
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;