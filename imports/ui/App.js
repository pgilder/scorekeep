import React from 'react';

import TitleBar from './TitleBar';
import MenuBar from './MenuBar';
import AddPlayer from './AddPlayer';
import PlayerList from './PlayerList';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <TitleBar title={this.props.title} subtitle="Home"/>
        <div className="wrapper">
          <PlayerList players={this.props.players}/>
          <AddPlayer/>
        </div>
        <MenuBar menu={this.props.menu} menutitle="Menu Title Here"/>
      </div>
    );
  }
};

App.propTypes = {
  title: React.PropTypes.string.isRequired,
  menu: React.PropTypes.string.isRequired,
  players: React.PropTypes.array.isRequired
};
