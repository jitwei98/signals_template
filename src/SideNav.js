import React, { Component } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

import './SideNav.css';

class SideNav extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     sidebarOpen: false
  //   };
  //   this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  // }

  // onSetSidebarOpen(open) {
  //   this.setState({ sidebarOpen: open });
  // }

	render() {
		return (
      <div className="row">
      <div className="col-lg-2">
        <p>List Based</p>
        <Nav vertical>
          <NavItem>
            <NavLink href="#">Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Another Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink disabled href="#">Disabled Link</NavLink>
          </NavItem>
        </Nav>
        <hr />
        <p>Link based</p>
        <Nav vertical>
          <NavLink href="#">Link</NavLink> <NavLink href="#">Link</NavLink> <NavLink href="#">Another Link</NavLink> <NavLink disabled href="#">Disabled Link</NavLink>
        </Nav>
      </div>
      </div>
      );
	}

}

export default SideNav;
