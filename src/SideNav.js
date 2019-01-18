import React, { Component } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

class SideNav extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   sidebarOpen: false
    // };
    // this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  // onSetSidebarOpen(open) {
  //   this.setState({ sidebarOpen: open });
  // }

	render() {
		return (
      <div className="col-lg-2" style={{textAlign: "left"}}>
        <p>List Based</p>
        <Nav pills vertical>
          <NavItem >
            <NavLink href="/TH/Formula/Euler">Euler Formula</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/TH/Formula/Integration">Integration Formula</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/TH/Formula/Trigo">Trigo Formula</NavLink>
          </NavItem>
          <NavItem>
            <NavLink disabled href="#">Disabled Link</NavLink>
          </NavItem>
        </Nav>
        <hr />
        <p>Link based</p>
        <Nav pills vertical>
          <NavLink href="#" active>Link</NavLink> <NavLink href="#">Link</NavLink> <NavLink href="#">Another Link</NavLink> <NavLink disabled href="#">Disabled Link</NavLink>
        </Nav>
        <hr />
        <p>List Based</p>
        <Nav pills vertical>
          <NavItem >
            <NavLink href="#" active>Link</NavLink>
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
        <Nav pills vertical>
          <NavLink href="#" active>Link</NavLink> <NavLink href="#">Link</NavLink> <NavLink href="#">Another Link</NavLink> <NavLink disabled href="#">Disabled Link</NavLink>
        </Nav>
      </div>
      );
	}

}

export default SideNav;
