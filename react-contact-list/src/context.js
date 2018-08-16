import React, { Component } from 'react';

const Context = React.createContext();

export class Provider extends Component {
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
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
