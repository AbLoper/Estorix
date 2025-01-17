import React, { useState, useEffect } from 'react';
import NavbarSM from './NavbarSM';
import NavbarLG from './NavbarLG';

export default function Navbar() {
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsSmallScreen(window.innerWidth <= 992);
        };

        checkScreenSize();

        window.addEventListener('resize', checkScreenSize);

        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    return isSmallScreen ? <NavbarSM /> : <NavbarLG />;
};