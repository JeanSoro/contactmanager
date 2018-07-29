import React, { Component } from 'react';
import Contact from './Contact';
import { Consumer } from '../../context';

class Contacts extends Component {
  

  render() {
    return (
        <Consumer>
            {value => {
                const { contacts } = value; // comes from context, this is essentially the state
                return (
                    <React.Fragment>
                        {contacts.map((contact, id) =>(
                        <Contact key={id} contact={contact} />
                        ))}
                    </React.Fragment>
                )
            }}
        </Consumer>
    ) 
  }
}

export default Contacts;
