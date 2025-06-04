import React from 'react';

function Navbar() {
    return (
        <nav>
            <ul style={{ display: 'flex', listStyleType: 'none', padding: 0, margin: 0 }}>
                <li style={{ marginRight: '20px' }}><a href="/literature">Literature</a></li>
                <li style={{ marginRight: '20px' }}><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;
