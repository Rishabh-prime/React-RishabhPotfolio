import React from 'react';
import Resume from '../Images/Rishabh Thakur . Resume.pdf'

function HeroSection() {
    return (
        <>
            <section id="hero-section">
                <section id="hero">
                    <h1>Hi, I'm <span>Rishabh</span> </h1>
                    <h2>I'm a <span>Web Developer</span></h2>
                    <div className="hero-buttons">
                        <a href="mailto:rishabh1616thakur@gmail.com" className="hero-button email-button">
                            <ion-icon name="mail-outline"></ion-icon> Email Me
                        </a>
                        <a href={Resume} download className="hero-button resume-button">
                            <ion-icon name="download-outline"></ion-icon> Resume
                        </a>
                    </div>
                </section>
            </section>
        </>
    );
}

export default HeroSection;
