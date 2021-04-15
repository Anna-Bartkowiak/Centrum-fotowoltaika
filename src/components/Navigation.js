import React from 'react';
import { Link as NavLink } from 'react-scroll';

export const Navigation = () => {
    return (
        <>
            <section className="sectionNav">
                <nav className='nav'>
                    <div className='nav__navbarContainer'>
                        <p className='nav__logo'>centrum<br /><span className='nav__logoSpan'>fotowoltaiki</span></p>
                        <ul className='nav__menu'>
                            <li className='nav__item'>
                                <NavLink
                                    to="aboutUs"
                                    className='nav__links'
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact='true'
                                    offset={-80}>
                                    o nas
                                </NavLink>
                            </li>
                            <li className='nav__item'>
                                <NavLink
                                    to='projects'
                                    className='nav__links'
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact='true'
                                    offset={-80}>
                                    realizacje
                                </NavLink>
                            </li>
                            <li className='nav__item'>
                                <NavLink
                                    to='offer'
                                    className='nav__links'
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact='true'
                                    offset={-80}>
                                    oferta
                                </NavLink>
                            </li>
                            <li className='nav__item active'>
                                <NavLink
                                    to='contact'
                                    className='nav__links '
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact='true'
                                    offset={-80}>
                                    kontakt
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </section>
        </>
    );
};

export default Navigation;