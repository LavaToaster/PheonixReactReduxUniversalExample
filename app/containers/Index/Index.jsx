import React, { Component } from 'react';

class Index extends Component {
  constructor() {
    super();
    this.state = {
      name: ''
    };
  }

  handleOnChange(event) {
    if (! event.target.value) {
      return;
    }

    this.setState({
      name: event.target.value
    })
  }

  render() {
    const { name } = this.state;
    const names = [
      "Adam",
      "Ross",
      "Peter",
      "Nathan",
      "Joe"
    ];

    return <div>
      <ul>
        { names.map(name => <li>{name}</li>) }
      </ul>
    </div>
  }
}

export default Index;
