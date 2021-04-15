import React from 'react';
import panelsGallery from "../assets/CF-gallery-kopia.png";

export const GallerySection = () => {
    return (
        <>
            <section id="projects" className="sectionGallery">
                <div className="gallery"
                    style={{ 'backgroundImage': `url(${panelsGallery})` }}
                >
                    <div className="gallery__container">
                        <div className="gallery__h2Wrapper">
                            <h2 className="gallery__h2">Zaufało nam ponad<br />100 000 Klientów</h2>
                            <hr className="gallery__hr" />
                        </div>
                        <div className="gallery__textWrapper">
                            <p>ponad</p>
                            <p className="gallery__realization">40 000</p>
                            <p className="gallery--textRight">realizacji</p>
                        </div>
                    </div>

                </div>
            </section>

        </>
    );
};

export default GallerySection;