import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink ,Button} from 'reactstrap';
// import { Link } from 'react-router-dom';
import { NavLink as RRNavLink } from 'react-router-dom';
import './SideNav.css'


class SideNav extends Component {
  constructor(props) {
    super(props);
      this.toggle1 = this.toggle1.bind(this);
      this.toggle2 = this.toggle2.bind(this);
      this.toggle3 = this.toggle3.bind(this);
      this.toggle4 = this.toggle4.bind(this);
      this.state = {
          collapse1: true,
          collapse2: true,
          collapse3: true,
          collapse4: true
      };
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
    toggle1() {
        this.setState({ collapse1: !this.state.collapse1 });
    }
    toggle2() {
        this.setState({ collapse2: !this.state.collapse2 });
    }
    toggle3() {
        this.setState({ collapse3: !this.state.collapse3 });
    }
    toggle4() {
        this.setState({ collapse4: !this.state.collapse4 });
    }
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

          <Button color="outline-dark" onClick={this.toggle1} > Cheat Sheet</Button>
          <Collapse isOpen={!this.state.collapse1}>
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
                    <NavItem>
                        <NavLink tag={RRNavLink} to="/TH/Formula/FourierTransform">Fourier Transform</NavLink>
                    </NavItem>
                </Nav>
          </Collapse>
        <hr />

          <Button color="outline-dark" onClick={this.toggle2} >Chapter 1</Button>
          <Collapse isOpen={!this.state.collapse2}>
              <Nav pills vertical>
                  <NavItem>
                      <NavLink tag={RRNavLink} to="/TH/Formula/Euler">Euler</NavLink>
                  </NavItem>
                  <NavItem>
                      <NavLink tag={RRNavLink} to="#">Type of wave</NavLink>
                  </NavItem>
              </Nav>
          </Collapse>
          <hr />

          <Button color="outline-dark" onClick={this.toggle3} >Chapter 2</Button>
          <Collapse isOpen={!this.state.collapse3}>
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
          </Collapse>
          <hr />

          <Button color="outline-dark" onClick={this.toggle4} >Chapter 3</Button>
          <Collapse isOpen={!this.state.collapse4}>
              <Nav pills vertical>
                  <NavItem>
                      <NavLink tag={RRNavLink} to="#" disabled>From series to transform</NavLink>
                  </NavItem>
                  <NavItem>
                      <NavLink tag={RRNavLink} to="/TH/Chapter3/Geogebra/lecture">Fourier transform</NavLink>
                  </NavItem>
                  <NavItem>
                      <NavLink tag={RRNavLink} to="/TH/Chapter3/Geogebra/addition">Linearity</NavLink>
                  </NavItem>
                  <NavItem>
                      <NavLink tag={RRNavLink} to="/TH/Chapter3/Geogebra/TimeScaling">Scaling</NavLink>
                  </NavItem>
                  <NavItem>
                      <NavLink tag={RRNavLink} to="#" disabled>Duality</NavLink>
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
                      <NavLink tag={RRNavLink} to="/TH/Chapter3/Geogebra/Convolution1">Convolution 1</NavLink>
                  </NavItem>
                  <NavItem>
                      <NavLink tag={RRNavLink} to="/TH/Chapter3/Geogebra/Convolution2">Convolution 2</NavLink>
                  </NavItem>
                  <NavItem>
                      <NavLink tag={RRNavLink} to="#">Dirac-delta function</NavLink>
                  </NavItem>

              </Nav>
          </Collapse>
          <hr />




      </div>
      );
	}

}

export default SideNav;
