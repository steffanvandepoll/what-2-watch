import React, { Component } from 'react';
import { Navbar, Nav, NavItem} from 'reactstrap';
import { NavLink } from 'react-router-dom';

import styled from 'styled-components'

const StyledNavbar = styled(Navbar)`
  background-color: #512DA8;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 3px 5px;
`;


class Header extends Component {

  render() {
      return(
        <StyledNavbar dark expand="md">
            <div className="container">
                <div className="row">
                <Nav navbar>
                  <NavItem>
                      <NavLink className="nav-link"  to='/'><span className="fa fa-home fa-lg"></span>Home</NavLink>
                  </NavItem>
                </Nav>
                </div>
            </div>
        </StyledNavbar>
      );
  }
}

export default Header;
