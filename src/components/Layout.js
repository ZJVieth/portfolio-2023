import React from 'react'
import { Helmet } from 'react-helmet'
import LanguageProvider, { LanguageText } from 'react-language-switch'

import { Constellation } from './layout/Constellation'
import { Footer } from './layout/Footer'
import { ImageCarousel } from './layout/ImageCarousel'
import { LanguageWheel } from './layout/Language'
import { Nav } from './layout/Nav'

import languageConfig from '../config/languageConfig.json'

import "../styles/layout.css"
import "../styles/desktop-layout.css"


const Layout = ({ children }) => (
    <main>
        <Helmet>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Graduate|IBM+Plex+Mono" />
            <script src="https://unpkg.com/dev-commend@latest" defer></script>
        </Helmet>

        <LanguageProvider
            json={languageConfig}
        >
            <div className="body-wrapper">

                <header className="nav-wrapper">
                    <Nav />
                </header>

                <div className="title-wrapper">
                    <h1><LanguageText name="name" /></h1>
                    <h2><LanguageText name="title" /></h2>
                    <h3><LanguageText name="subtitle" /></h3>
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
        </LanguageProvider>
    </main>
)

export default Layout