import React from 'react';

export const Contact = () => {
    return (
        <>
            <footer id="contact" className='sectionContact'>
                <div className="sectionContact__container">
                    <h2 className="sectionContact__h2">Kontakt</h2>
                    <hr className="sectionContact__hr" />
                    <p className="sectionContact__text">Jeśli chcesz cieszyć się elektrownią słoneczną w Twoim domu lub firmie już od pierwszego dnia instalacji, skontaktuj się z naszymi ekspertami! Skorzystaj z kompleksowych, innowacyjnych rozwiązań i dołącz do grona zadowolonych klientów, którzy już nam zaufali!</p>
                    <div className="sectionContact__contactWrapper">
                        <div className="sectionContact__contactOffice">
                            <h3 className="sectionContact__h3">Centrum Fotowoltaiki Hymon</h3>
                            <a>ul. Santocka 39</a>
                            <p>71 – 083 Szczecin</p>
                            <a className="sectionContact__link"
                                href='tel:+48666666541'
                                target='_blank'
                                rel="noreferrer"
                            >Tel: +48 666 666 541</a>
                            <a className="sectionContact__link"
                                href='mailto:centrumfotowoltaiki@hymon.pl?subject=Zapytanie%20ofertowe&body=Dzień%20dobry,'
                                target='_blank'
                                rel="noreferrer"
                            >centrumfotowoltaiki@hymon.pl</a>
                        </div>
                        <div className="sectionContact__contactSpecialist">
                            <h3 className="sectionContact__h3">Główny inżynier</h3>
                            <p>Mgr Inż. Jarosław Kałuc</p>
                            <a className="sectionContact__link"
                                href='tel:+48667806802'
                                target='_blank'
                                rel="noreferrer"
                            >Tel. +48 509 871 781</a>
                            <a className="sectionContact__link"
                                href='mailto:j.kaluc@hymon.pl?subject=Zapytanie%20ofertowe&body=Dzień%20dobry,'
                                target='_blank'
                                rel="noreferrer"
                            >j.kaluc@hymon.pl</a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Contact;