import React from 'react'
import '../Header/Header.css'
import { Button } from 'react-bootstrap'

function Header() {
    return (
        <nav className="header">
            The Ninja Developer
            <div className="header__btn">
            <Button>Log In as Freelancer</Button>
            <Button>Log In as Employeer</Button>
            </div>
        </nav>
    )
}

export default Header
