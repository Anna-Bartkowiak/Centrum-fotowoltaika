import React, { Component, useState } from 'react';
import {
    Tabs,
    TabPanel,
    TabList,
    Tab
} from "react-web-tabs";
import image1 from '../assets/elektrownieSolarne.jpg';
import image2 from '../assets/pompyCiepla.jpg';
import image3 from '../assets/kotlyElektrodowe.jpg';

export const Offer = () => {
    const [activeIndex, setActiveIndex] = useState(1);

    return (
        <>
            <section id="offer" className="sectionOffer">
                <div className="sectionOffer__container">
                    <h2 className="sectionOffer__h2">Oferta</h2>
                    <hr className="sectionOffer__hr" />
                    <p className="sectionOffer__text">Montujemy elektrownie solarne, piece elektrodowe oraz systemy Co i CW. W ramach kompleksowego pakietu usług:</p>
                    <div className="sectionOffer__grid">
                        <div className="sectionOffer__item-1">
                            <div className="sectionOffer__textBox">
                                <p>bezpłatny audyt</p>
                                <p className="sectionOffer__itemNumber">1</p>
                            </div>
                        </div>
                        <div className="sectionOffer__item-2">
                            <div className="sectionOffer__textBox">
                                <p>dobieramy odpowiednie<br />miejsce instalacji</p>
                                <p className="sectionOffer__itemNumber">2</p>
                            </div>
                        </div>
                        <div className="sectionOffer__item-3">
                            <div className="sectionOffer__textBox">
                                <p>dopasowujemy najlepsze<br />rozwiązania</p>
                                <p className="sectionOffer__itemNumber">3</p>
                            </div>
                        </div>
                        <div className="sectionOffer__item-4">
                            <div className="sectionOffer__textBox">
                                <p>Projektujemy<br />instalację</p>
                                <p className="sectionOffer__itemNumber">4</p>
                            </div>
                        </div>
                        <div className="sectionOffer__item-5">
                            <div className="sectionOffer__textBox">
                                <p>fachowy montaż</p>
                                <p className="sectionOffer__itemNumber">5</p>
                            </div>
                        </div>
                        <div className="sectionOffer__item-6">
                            <div className="sectionOffer__textBox">
                                <p>niezawodny serwis</p>
                                <p className="sectionOffer__itemNumber">6</p>
                            </div>
                        </div>
                    </div>
                    <div className="sectionOffer__tabs">
                        <Tabs>
                            <TabList className="sectionOffer__tabList">
                                <Tab
                                    tabFor="one"
                                    onClick={() => setActiveIndex(1)}
                                    className={(activeIndex === 1 ? 'active ' : '')}>
                                    Elektrownie solarne
                                </Tab>
                                <Tab
                                    tabFor="two"
                                    onClick={() => setActiveIndex(2)}
                                    className={(activeIndex === 2 ? 'active ' : '')}>
                                    Pompy ciepła
                                </Tab>
                                <Tab
                                    tabFor="three"
                                    onClick={() => setActiveIndex(3)}
                                    className={(activeIndex === 3 ? 'active ' : '')}>
                                    Kotły elektrodowe
                                </Tab>
                            </TabList>
                            <TabPanel tabId="one" className="sectionOffer__tabPanel">
                                <div className="sectionOffer__tabWrapper">
                                    <div className="sectionOffer__textWrapper">
                                        <p>Elektrownie słoneczne są innowacyjnym,ekologicznym rozwiązanie, które pozwoli na znaczną redukcję wydatków związanych ze zużyciem prądu.</p>
                                        <p>Nasza firma gwarantuje najbardziej innowacyjne, dobre jakościowo produkty dostępne na rynku, które właściwie dobrane i zamontowane w najbardziej dogodnym do tego miejscu, są gwarancją sukcesu.</p>
                                    </div>
                                    <div className="sectionOffer__imgWrapper">
                                        <img src={image1} alt="kotły elektrodowe" />
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel tabId="two" className="sectionOffer__tabPanel">
                                <div className="sectionOffer__tabWrapper">
                                    <div className="sectionOffer__textWrapper">
                                        <p>W Ofercie posiadamy również pompy ciepła, które służą do ogrzewania lub chłodzenia pomieszczeń mieszkalnych i użytkowych oraz przygotowywania ciepłej wody użytkowej.</p>
                                        <p>Dobieramy zestawy pomp, które w myśl wymagań klienta będą stanowiły najlepszą kombinację modułów zewnętrznych i wewnętrznych.</p>
                                        <p>Oferujemy najdłuższy na rynku, 5 letni czas gwarancji na systemy Ecodan marki Mitsubishi Electric!</p>
                                    </div>
                                    <div className="sectionOffer__imgWrapper">
                                        <img src={image2} alt="kotły elektrodowe" />
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel tabId="three" className="sectionOffer__tabPanel">
                                <div className="sectionOffer__tabWrapper">
                                    <div className="sectionOffer__textWrapper">
                                        <h3>Kotły elektrodowe V Generacji „Ecohouse”:</h3>
                                        <p>Kocioł elektrodowy to urządzenie elektryczno-elektrodowym, które poprzez przepływ prądu pomiędzy elektrodami umieszczonymi w module grzewczym kotła, ogrzewaciecz do żądanej temperatury. Jest to urządzenie działające w układzie zamkniętym, w pełni bezpieczne dla użytkownika i instalacji.</p>
                                        <p className="sectionOffer__boldP">Nasze kotły wyróżnia:</p>
                                        <ul className="sectionOffer__textUl">
                                            <li>prostota wykonania</li>
                                            <li>bezobsługowa eksploatacja</li>
                                            <li>bardzo długi, bezawaryjny czas użytkowania</li>
                                            <li>prostota montażu bez konieczności zmiany źródła ciepła</li>
                                            <li>brak spalin oraz pyłów</li>
                                            <li>bezpieczeństwo dla środowiska</li>
                                            <li>produkcja elementów składowych na terenie Polski</li>
                                        </ul>
                                    </div>
                                    <div className="sectionOffer__imgWrapper">
                                        <img src={image3} alt="kotły elektrodowe" />
                                    </div>
                                </div>
                            </TabPanel>
                        </Tabs>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Offer;