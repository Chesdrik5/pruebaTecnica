import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import logo_beta_blue from '../../assets/img/logo_beta_blue.svg';
import './nav.css';

const NavBar = () => (
    <div>
        <Nav className="nav">
            <NavItem>
                <NavLink href="#"><img src={logo_beta_blue} alt="Logo" /></NavLink>
            </NavItem>
        </Nav>
    </div>
)

export default NavBar;