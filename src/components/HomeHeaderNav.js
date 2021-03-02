import React from 'react';
import { Link as LinkR } from 'react-router-dom';
import { Link as NavLink } from 'react-scroll';
import background from '../assets/CF-hero.png';

export const HomeHeaderNav = () => {
    return (
        <>
            <section className="sectionHeader">
                <header className='header' style={{ 'backgroundImage': `url(${background})` }}>
                    <nav className='nav'>
                        <div className='nav__navbarContainer'>
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
                                        to='foundations'
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
                    <div className='header__container'>
                        <div className='header__textWrapper'>
                            <h1 className='header__textH1'>Energia i ciepło<br />dla twojego domu<br />panele solarne</h1>
                            <div className='header__buttonsWrapper'>
                                <button className='btn btn--left'>
                                    <LinkR to="/login" className='btnLinks'>dowiedz się więcej</LinkR>
                                </button>
                                <button className='btn'>
                                    <LinkR to="/login" className='btnLinks'>zamów kontakt</LinkR>
                                </button>
                            </div>
                        </div>
                    </div>
                </header>
            </section>
        </>
    );
};

export default HomeHeaderNav;
