import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Navbar.css";
class Navigation extends React.Component{
  render(){

    return(
      <Navbar collapseOnSelect expand="lg" variant="dark">
      <Navbar.Brand href="#home">My logo</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
       
        <Nav >
          <Nav.Link href="https://rizikolik.github.io/portfolio_page/about.html" target="_blank">Who I am ? </Nav.Link>
          <Nav.Link eventKey={2} href="https://github.com/rizikolik" target="_blank">
           Github
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
 
    )
  }
}
export default Navigation;