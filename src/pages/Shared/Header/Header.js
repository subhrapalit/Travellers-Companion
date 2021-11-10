import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../Hooks/useAuth';


const Header = () => {
    const { user, logOut } = useAuth();
    return (

        //Header Section
        <div>
            <Navbar collapseOnSelect expand="lg" bg="info" variant="light" sticky="top">
                <Container>
                    <Navbar.Brand href="#home">Let's<small className='text-danger fw-bolder'> Travel</small></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#offers">Our Offers</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#faq">FAQ</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#contact">Contact</Nav.Link>

                        <Nav.Link as={HashLink} to="/admin">Admin</Nav.Link>

                        {user?.email ?

                            <Button onClick={logOut} variant="warning">Log Out</Button> :

                            <Nav.Link as={Link} to="/login">Log In</Nav.Link>}
                        <Navbar.Text className='ms-3'>
                            <small className='text-success fw-bolder'>Welcome: </small> <a href="#login">{user?.displayName} </a>
                        </Navbar.Text>


                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </div>
    );
};

export default Header;