import React, { Component } from 'react';
import Contact from './Contact';

class Contacts extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: 'John Doe',
        email: 'jdoe@gmail.com',
        phone: '444-444-4444'
      },
      {
        id: 2,
        name: 'Jane Doe',
        email: 'janedoe@gmail.com',
        phone: '444-444-5555'
      },
      {
        id: 3,
        name: 'Bob Doe',
        email: 'Bdoe@gmail.com',
        phone: '444-555-4444'
      }
    ]
  };

  deleteContact = id => {
    const { contacts } = this.state;

    const newContacts = contacts.filter(contact => contact.id !== id);

    this.setState({
      contacts: newContacts
    });
  };

  render() {
    const { contacts } = this.state;
    return (
      <React.Fragment>
        {contacts.map(contact => (
          <Contact
            key={contact.id}
            contact={contact}
            deleteClickHandler={this.deleteContact.bind(this, contact.id)}
          />
        ))}
      </React.Fragment>
    );
  }
}
export default Contacts;
