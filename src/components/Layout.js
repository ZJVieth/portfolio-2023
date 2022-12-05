import React from 'react'
import { Helmet } from 'react-helmet'

import { Constellation } from './layout/Constellation'
import { Footer } from './layout/Footer'
import { ImageCarousel } from './layout/ImageCarousel'
import { LanguageWheel } from './layout/Language'
import { Nav } from './layout/Nav'

import "../styles/layout.css"
import "../styles/desktop-layout.css"


const Layout = ({ children }) => (
    <main>
        <Helmet>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Graduate|IBM+Plex+Mono" />
        </Helmet>

        <div className="body-wrapper">

            <header className="nav-wrapper">
                <Nav />
            </header>

            <div className="title-wrapper">
                <h1>Zino J. Vieth</h1>
                <h2>Product||Web Developer</h2>
                <h3>Passionate about innovative software development.</h3>
            </div>

            <div className="constellation-wrapper">
                <Constellation />
            </div>

            <div className="content-wrapper">
                {children}
            </div>

            <footer className="footer-wrapper">
                <Footer />
            </footer>

            <div className="language-wrapper">
                <LanguageWheel />
            </div>

            <div className="carousel-wrapper">
                <ImageCarousel />
            </div>


        </div>
    </main>
)

export default Layout