import React, { Component } from 'react';
import { Navbar, Nav, Button, Form } from 'react-bootstrap';
import './style.css';

class Header extends Component {
    render() {
        return (
            <div className='header-section'>
                <Navbar variant="dark">
                    {/* <Navbar.Brand href="/">Home</Navbar.Brand> */}
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                    </Nav>
                    <Form inline>
                        <Nav.Link href="/favourites">
                            <Button variant="outline-info">Favourites</Button>
                        </Nav.Link>
                    </Form>
                </Navbar>
            </div>
        );
    }
}

export default Header;
