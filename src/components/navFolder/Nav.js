import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Container } from 'reactstrap';

class NavBar extends Component {
    //const [isOpen, setIsOpen] = useState(false);
    state = {
        isOpen: false
    }

    toggle = () => {
        this.setState({ isOpen: !this.state.isOpen })
    }

    render() {
        return (
            <div>
                <Navbar color="secondary" dark expand="md">
                    <Container>
                        <NavbarBrand href="/" className='font-weight-bolder'>maverickHOTEL</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink href="/" className='text-warning font-weight-bold'>Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/rooms" className='text-warning font-weight-bold'>Rooms</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
}

export default NavBar