import React, { Component } from 'react';
import { Navbar, Nav, NavItem, Input, Button, Form} from 'reactstrap';
import { NavLink, withRouter } from 'react-router-dom';

import styled from 'styled-components'

const StyledNavbar = styled(Navbar)`
  background-color: #512DA8;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 3px 5px;
`;

const StyledForm = styled(Form)`
  display: flex;
`;


class Header extends Component {

  constructor(props) {
  super(props);

  this.state = {
    searchValue: "",
  };

  this.handleInputChange = this.handleInputChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
}

  handleInputChange(e) {
    this.setState({
      searchValue: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      searchValue: "",
    });

    this.props.history.push('/search/' + this.state.searchValue)
  }

  render() {
      return(
        <StyledNavbar dark expand="md">
            <div className="container">
                  <Nav navbar>
                    <NavItem>
                        <NavLink className="nav-link"  to='/'><span className="fa fa-home fa-lg"></span>Home</NavLink>
                    </NavItem>

                  </Nav>
                  <StyledForm onSubmit={(e) => this.handleSubmit(e)}>
                    <Input onChange={this.handleInputChange} name="search" type="search" id="search" value={this.state.searchValue} placeholder="Search" />
                    <Button className="ml-2" type="submit">Search</Button>
                  </StyledForm>
            </div>
        </StyledNavbar>
      );
  }
}

export default withRouter(Header);
