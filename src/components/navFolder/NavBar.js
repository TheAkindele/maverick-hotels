import React, { Component } from 'react'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'

class NavBar extends Component {
    state = {
        isOpen: false
    }

    openMenu = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
        //console.log('state= ', this.state)
    }

    render() {
        return (
            <div className="header">
                <div className="navbar">
                    <div className="logo">
                        <Link to='/'><h2>MaVeRiCk Hotels</h2></Link>
                    </div>

                    <div className="nav-list-big">
                        <h6><Link to='/'>Home</Link></h6>
                        <h6><Link to='/rooms'>Rooms</Link></h6>
                        <h6><Link to='/contact'>Contact</Link></h6>
                    </div>

                    <h3 className="toggle-icon" onClick={this.openMenu}>
                        <FaBars />
                    </h3>
                </div>
                <div className={this.state.isOpen ? 'open' : 'closed'}>
                    <div><Link to='/'>Home</Link></div>
                    <h4><Link to='/rooms'>ROOMS</Link></h4>
                    <h4><Link to='/contact'>CONTACT</Link></h4>
                </div>
            </div>
        )
    }
}
//
export default NavBar

/*

*/
