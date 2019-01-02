import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import { blueGradient } from 'components/theme/DeepCast/gradients';

const MainNavbar = styled(Navbar)`
  background: ${blueGradient};
`;

export class MainNav extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    return (
      <div>
        <MainNavbar color="dark" dark expand="md">
          <NavbarBrand tag={Link} to="/">
            DeepCast.ai
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink tag={Link} to="/">
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="about">
                  About
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="media">
                  Media
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="product">
                  Product
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink tag={Link} to="solutions">
                  Solutions
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink tag={Link} to="testpage">
                  TestPage
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </MainNavbar>
      </div>
    );
  }
}

export default MainNav;
