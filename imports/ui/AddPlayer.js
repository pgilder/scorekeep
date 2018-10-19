import React from 'react';

import {Players} from './../api/players';

export default class AddPlayer extends React.Component {
  handleSubmit(e) {
    let playerName = e.target.playerName.value;
    let techName = e.target.techName.value;
    let routeName = e.target.routeName.value;

    e.preventDefault();

    if (playerName) {
      e.target.playerName.value = '';
      Players.insert({
        name: playerName,
        tech: techName,
        route: routeName,
        score: 0
      });
    }
  }
  render() {
    return (
      <div className="item">
        <form className="form" onSubmit={this.handleSubmit.bind(this)}>
          <input className="form__input" type="text" name="playerName" placeholder="Customer Name"/>
          <input className="form__input" type="text" name="techName" placeholder="Tech Name"/>
          <input className="form__input" type="text" name="routeName" placeholder="Route Name"/>
          <button className="button">Add Account</button>
        </form>
      </div>
    );
  }
};
