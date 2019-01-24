import React, { Component } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
// import { Link } from 'react-router-dom';
import { NavLink as RRNavLink } from 'react-router-dom';

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
        <p>Cheat Sheet</p>
        <Nav pills vertical>
          <NavItem>
            <NavLink tag={RRNavLink} to="/TH/Formula/Euler">Euler</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={RRNavLink} to="/TH/Formula/Integration">Integration Formula</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={RRNavLink} to="/TH/Formula/Trigo">Trigo Formula</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={RRNavLink} to="/TH/Formula/FourierSeries">Fourier Series</NavLink>
          </NavItem>
        </Nav>
        <hr />

        <p>Chapter 1</p>
        <Nav pills vertical>
          <NavLink href="/TH/Chapter1/lecture" active>Lecture</NavLink> <NavLink href="#">Link</NavLink> <NavLink href="#">Another Link</NavLink> <NavLink disabled href="#">Disabled Link</NavLink>
        </Nav>
        <hr />
        <p>Chapter 2</p>
        <Nav pills vertical>
        <NavItem >
            <NavLink href="/TH/Chapter2/lecture" active>Lecture</NavLink>
        </NavItem>
          <NavItem >
            <NavLink href="/TH/Chapter2/Geogebra/OverallPlayground">Time and Frequency</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/TH/Chapter2/Geogebra/EvenPeriodicFunction">Even period function</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/TH/Chapter2/Geogebra/OddPeriodicFunction">Odd period function</NavLink>
          </NavItem>
        </Nav>
        <hr />
      </div>
      );
	}

}

export default SideNav;
