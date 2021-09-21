import React from 'react';
import { Nav, Bars, NavMenu, NavLink, NavBtn, NavBtnLink} from './NavbarElement';

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to="/" >
                    <h1>Logo Here</h1>
                </NavLink>
                <Bars/>
                <NavMenu>
                    <NavLink to="/home" activeStyle>
                        Home
                    </NavLink>
                    <NavLink to="/trade" activeStyle>
                        Trade
                    </NavLink>
                    <NavLink to="/invest" activeStyle>
                        Invest
                    </NavLink>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/wallet">Connect Wallet</NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    )
}

export default Navbar
