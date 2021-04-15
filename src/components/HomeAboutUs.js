import React from 'react';
import certificate from '../assets/CF-cert.jpg';

export const HomeAboutUs = () => {
    return (
        <>
            <section id='aboutUs' className='aboutUs'>
                <div className="aboutUs__container">
                    <div className="aboutUs__wrapperText">
                        <h2 className="aboutUs__h2">O nas</h2>
                        <hr className="aboutUs__hr" />
                        <ul>
                            <li className="aboutUs__text">Jesteśmy <span className="aboutUs__span">liderem na rynku fotowoltaiki</span> w Polsce.</li>
                            <li className="aboutUs__text">Montujemy systemy fotowoltaiczne na terenie województw <span className="aboutUs__span">zachodniopomorskiego, pomorskiego i lubuskiego.</span></li>
                            <li className="aboutUs__text">Dostosowujemy <span className="aboutUs__span">najbardziej innowacyjne rozwiązania w zakresie fotowotlaiki</span>, do potrzeb i możliwości naszych klientów.</li>
                            <li className="aboutUs__text">Zapewniamy <span className="aboutUs__span">całościowe przygotowanie elektrowni fotowoltaicznej</span>, począwszy od wykonania projektu, aż po przyłączenie do sieci i związane z tym wszelkie administracyjne procedury.</li>
                        </ul>
                    </div>

                    <div className="aboutUs__image">
                        <img src={certificate} className='aboutUs__teamImage' alt="certificate" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomeAboutUs;
