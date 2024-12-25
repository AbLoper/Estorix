import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/all';
gsap.registerPlugin(ScrollToPlugin);

const ScrollToTopButton = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 600) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        gsap.to(window, {
            duration: 2,
            scrollTo: { y: 0 },
            ease: 'linear',
        });
    };

    return (
        visible && (
            <button
                className='bg-primary'
                onClick={scrollToTop}
                style={{
                    position: 'fixed',
                    bottom: '2rem',
                    right: '2rem',
                    padding: '1rem',
                    color: '#fff',
                    border: '.5px solid #fff',
                    borderRadius: '50px',
                    cursor: 'pointer',
                }}
            >
                top
            </button>
        )
    );
};

export default ScrollToTopButton;
