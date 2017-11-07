import React, { Component } from 'react';
import { getPeople } from '../../usersService.js';
import { Link } from 'react-router-dom'


export default class People extends Component {
  constructor() {
    super()
    this.state = {
      people: []
    }
  }

  componentDidMount() {
    // axios call would go here to get data
    let people = getPeople() // getting people data from service file
    this.setState({
      people: people // updating state with people data
    })
  }

  render() {
    const people = this.state.people.map((e, i) => {
      return (
        <div>
          {/* TODO put in Link tags to take us to each specific person based on the person's id. */}
          <Link to={`/people/${e.id}`}>
            <h3>{e.name}</h3>
          </Link>

        </div>
      )
    })
    return (
      <div>
        <h1>This is the people component</h1>
        {people}
      </div>
    )
  }
}
