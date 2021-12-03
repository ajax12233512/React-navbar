import React from 'react'

const navMenu = document.getElementById('navMenu')

export const Header = () => {
    return (
        <div className="navbar">
            <div className="navbar-brand">
                <h1 className="is-size-2">ZAID TEKNOLOGIES</h1>
                <a href="/" className="navbar-burger">
                    <span></span>
                    <span></span>
                </a>
            </div>
            
            <div className="navbar-menu" id="navMenu">
                <a href="/" className="navbar-item"><h2>HOME</h2></a>
                <a href="/"  className="navbar-item"><h2>WHY US</h2></a>
                <a href="/"  className="navbar-item"><h2>PRODUCTS</h2></a>
                <a href="/"  className="navbar-item"><h2>SERVICES</h2></a>
            </div>
        </div>
    )
}

