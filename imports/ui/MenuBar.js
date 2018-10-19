import React from 'react';
import { FaBeer } from 'react-icons/fa';

export default class MenuBar extends React.Component {
  renderMenutitle() {
    if (this.props.menutitle) {
      return <h2 className="menu-bar__menutitle">{this.props.menutitle}</h2>;
    }
  }
  render() {
    return (
      <div className="menu-bar">
        <div className="wrapper">
        <div className="menu-icons">
          {this.renderMenutitle()}
          <div className=""><FaBeer /></div>
          <div className=""><FaBeer /></div>
          <div className=""><FaBeer /></div>
        </div>
        </div>
      </div>
    );
  }
}


MenuBar.propTypes = {
  menu: React.PropTypes.string.isRequired,
  menutitle: React.PropTypes.string
};

MenuBar.defaultProps = {
  // title: 'Default title'
};
