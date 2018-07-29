import React, { Component } from 'react';
import Contact from './Contact'

class Contacts extends Component {
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

        ]
        
    }


  render() {
    const { contacts } = this.state;

    return (
      <React.Fragment>
        {contacts.map((contact, id) =>(
            <Contact key={id} contact={contact} />
        ))}
      </React.Fragment>
    )
  }
}

export default Contacts;
