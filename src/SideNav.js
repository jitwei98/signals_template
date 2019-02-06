import React, { Component } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
// import { Link } from 'react-router-dom';
import { NavLink as RRNavLink } from 'react-router-dom';
import './SideNav.css'


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

  /*
              @media (min-width: 768px) {
  .sidebar {
    position: fixed;
    top: 0px;
    bottom: 0;
    left: 0;
    z-index: 1000;
    display: block;
    /*padding: 5px;
    padding-left: 10px;*/
  //   overflow-x: hidden;
  //   overflow-y: auto;  Scrollable contents if viewport is shorter than content. 
  //   background-color: #f5f5f5;
  //   border-right: 1px solid #eee;
  // }
  // */

	render() {
		return (
      // TODO: collapse on smaller screen
      <div 
        className="col-md-2 hidden-lg hidden-xs hidden-sm" 
        style={{
          textAlign: "left",
          borderRight: 1+"px" + " solid #eee",
          paddingTop: 15 + 'px',
          overflowX: "hidden"
        }}>
        
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
          <NavItem>
            <NavLink tag={RRNavLink} to="/TH/Formula/Euler">Euler</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={RRNavLink} to="#">Type of wave</NavLink>
          </NavItem>
        </Nav>
        <hr />

        <p>Chapter 2</p>
        <Nav pills vertical>
          <NavItem>
            <NavLink tag={RRNavLink} to="/TH/Chapter2/lecture">Fourier series</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={RRNavLink} to="/TH/Chapter2/Geogebra/EvenPeriodicFunction">Even periodic Function</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={RRNavLink} to="/TH/Chapter2/Geogebra/OddPeriodicFunction">Odd periodic Function</NavLink>
          </NavItem>
        </Nav>
        <hr />


        <p>Chapter 3</p>
        <Nav pills vertical>
          <NavItem>
            <NavLink tag={RRNavLink} to="#">From series to transform</NavLink>
          </NavItem>
            <NavItem>
                <NavLink tag={RRNavLink} to="/TH/Chapter3/Geogebra/addition">Linearity</NavLink>
            </NavItem>
          <NavItem>
            <NavLink tag={RRNavLink} to="/TH/Chapter3/Geogebra/TimeScaling">Scaling</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={RRNavLink} to="#">Duality</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={RRNavLink} to="/TH/Chapter3/Geogebra/timeShift">Time shifting</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={RRNavLink} to="/TH/Chapter3/Geogebra/FrequencyShift">Frequency shifting</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={RRNavLink} to="/TH/Chapter3/Geogebra/Differentiation">Differentiation</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={RRNavLink} to="/TH/Chapter3/Geogebra/Integration">Integration</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={RRNavLink} to="#">Multiplication</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={RRNavLink} to="#">Convolution</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={RRNavLink} to="#">Dirac-delta function</NavLink>
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
