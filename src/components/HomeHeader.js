import React from 'react';
import { Link as LinkS } from 'react-scroll';
import background from '../assets/CF-hero.jpg';

export const HomeHeader = () => {
    return (
        <>
            <section className="sectionHeader">
                <header
                    className='header'
                    style={{ 'backgroundImage': `url(${background})` }}
                >
                    <div className='header__container'>
                        <div className='header__textWrapper'>
                            <h1 className='header__textH1'>Energia i ciepło<br />dla twojego domu<br />panele solarne</h1>
                            <div className='header__buttonsWrapper'>
                                <button className='btn btn--left'>
                                    <LinkS
                                        to="offer"
                                        className='btnLinks'
                                        smooth={true}
                                        duration={500}
                                        spy={true}
                                        exact='true'
                                        offset={0}>
                                        dowiedz się więcej
                                    </LinkS>
                                </button>
                                <button className='btn'>
                                    <LinkS
                                        to="contact"
                                        className='btnLinks'
                                        smooth={true}
                                        duration={500}
                                        spy={true}
                                        exact='true'
                                        offset={0}>
                                        zadzwoń do nas
                                    </LinkS>
                                </button>
                            </div>
                        </div>
                    </div>
                </header>
            </section>
        </>
    );
};

export default HomeHeader;
