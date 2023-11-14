import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from "react-router-dom";
import './menu.css'

export default function Menu(){
    return(
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <img className="iconName" src="/src/assets/iconMovie.png"></img>
        <Navbar.Brand href="/"className="nombrePagina">MoviesCooolll!!!!!</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to={"/"}>Inicio</NavLink>
            <NavLink to={"/comedia"}>Comedia</NavLink>
            <NavLink to={"/independientes"}>Independientes</NavLink>
            <NavLink to={"/clasicas"}>Clasicas</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}