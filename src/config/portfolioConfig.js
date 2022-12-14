import React from 'react'

import { openTab } from '../util/navigationUtil'

import html from '../images/tech-logos/html.svg'
import css from '../images/tech-logos/css.svg'
import js from '../images/tech-logos/js.png'
import php from '../images/tech-logos/php.svg'
import mysql from '../images/tech-logos/mysql.png'
import python from '../images/tech-logos/python.svg'
import anaconda from '../images/tech-logos/anaconda.png'
import tensorflow from '../images/tech-logos/tensorflow.svg'
import nodejs from '../images/tech-logos/nodejs.svg'
import react from '../images/tech-logos/react.svg'
import firebase from '../images/tech-logos/firebase.svg'
import gatsby from '../images/tech-logos/gatsby.svg'

import devcommendIcon from '../images/showroomIcons/devcommendIcon.png'
import catenaryIcon from '../images/showroomIcons/catenary.png'
import dentistIcon from '../images/showroomIcons/dentist.png'
import datavizIcon from '../images/showroomIcons/datavizIcon.png'
import esportsIcon from '../images/showroomIcons/birdIcon.png'
import meatIcon from '../images/showroomIcons/cow.png'

import catenaryPreview from '../images/showroomPreviews/catenary_poster.png'
import dentistPreview from '../images/showroomPreviews/dentist_preview.png'
import datavizPreview from '../images/showroomPreviews/dataviz.png'
import esportsPreview from '../images/showroomPreviews/esportsPreview.png'
import meatPreview from '../images/showroomPreviews/meatmadness_preview.png'

const PortfolioImage = ({ src, alt }) => (
    <img
        src={src}
        alt={alt}
        onClick={() => openTab(src)}
    />
)

export const portfolioItems = [
    // DEV COMMEND ---------------------------------------------
    {
        icon: devcommendIcon,
        title: {
            en: "DevCommend",
            de: "DevCommend",
            jp: "DevCommend"
        },
        subtitle: {
            en: "The in-portfolio developer endorsement platform.",
            de: "Die integrierbare Developerempfehlungs Platform."
        },
        preview: <>
            <dev-commend
                useMockData="true"
                width="100%"
                height="350px"
            >
            </dev-commend>
        </>,
        comment: {
            en: <>
                DevCommend is my web-component and GitHub OAuth2-based platform for
                software developers to commend each other on their portfolio.
                The styling of the management website and the insertable web component
                itself is based on GitHub's styling.<br />
                DevCommend uses javascript's web-component API and is made available via
                NPM. The web-component can be easily integrated via the "NPM unpackage"
                CDN. The web-component gets its data by fetching from my API which lives
                on a PHP server. The data is managed by a mySQL DBMS. Before being able to fetch
                data from the API, a user's domain has to be verified via DNS records, which
                will allow requests from this site to make fetch requests from my API.<br />
                To register your domain, as well as make and manage commends to other people
                or yourself, you can use the tools at commend.dev. Your management site also
                generates a link which you can send to your peers or friends to ask for
                commends on your portfolio website.
            </>,
            de: <>
                DevCommend is meine Web Komponente und GitHub OAuth2-basierte platform für
                Portfolio-integrierbare Software Entwickler Empfehlungsschreiben. Das Design
                der Web Komponente ist inspiriert von GitHub's Design.<br />
                DevCommend verwendet Javascripts web-component API und ist via NPM für alle
                Entwickler verfügbar. Es kann einfach via des "NPM unpackage" CDN in jede
                Webseite eingebaut werden. Die Daten bezieht es von meiner API die auf einem
                PHP server lebt. Die Daten selber werden von einem mySQL DBMS gemanaged. Bevor
                eine Domain Daten von der API abrufen kann, muss sie via DNS Protokollen verifiziert
                werden.<br />
                Um eine Domain für die Benutzung von DevCommend zu registrieren, und um anderen
                Entwicklern ein kurzes Empfehlungsschreiben zu geben, kann man sich mit GitHub
                auf der Admin Seite von DevCommen anmelden. Auf dieser Admin Seite findet man auch
                einen Link der, wenn geteilt, es anderen Entwicklern erlaubt, dir eine Empfehlung
                zu schreiben.
            </>
        },
        buttons: [
            {
                name: {
                    en: "COMMEND.DEV"
                },
                link: "https://commend.dev"
            },
            {
                name: {
                    en: "NPM"
                },
                link: "https://www.npmjs.com/package/dev-commend"
            }
        ],
        stack: [
            html, css, js, php, mysql
        ],
    },

    // 3D DEEP LEARNING
    {
        icon: catenaryIcon,
        title: {
            en: "3D Deep Learning",
            de: "3D Deep Learning"
        },
        subtitle: {
            en: "Pipeline for the Reconstruction of 3D Models from Point Cloud-based railway scenes.",
            de: "Pipeline für die Rekonstruierung von 3D Modellen von Point Cloud-basierten Zugstrecken Szenen",
            jp: ""
        },
        preview: <>
            <PortfolioImage
                src={catenaryPreview}
                alt="3D Deep Learning Pipeline Poster"
            />
        </>,
        comment: {
            en: `
            I developed this pipeline protoype within the scope of my bachelor's thesis, 
            which had the topic of \"point cloud classification and segmentation for 
            catenary systems\". The project used a point cloud dataset of real life 
            catenary arches provided by Strukton Rail, a Dutch railway company, and CAD 
            models of the parts of the catenary systems. the purpose of the pipeline is 
            to utilize a deep learning model and point pair feature matching to place the 
            CAD models at their correct position and orientation, reconstructing a complete 
            CAD model of the scanned arch.\nI was allowed to present my thesis via a poster
            at the ictOpen conference in Amsterdam in April 2022.
            `
        },
        buttons: [
            {
                name: {
                    en: "READ PAPER",
                    de: "THESIS"
                },
                link: "http://essay.utwente.nl/89565/1/vieth_BA_eemcs.pdf"
            },
            {
                name: {
                    en: "PRESENTATION"
                },
                link: "https://drive.google.com/file/d/1JvN1jng4e5CawFKrwU3HcSOSLnc3dh__/view?usp=share_link"
            }
        ],
        stack: [
            python, tensorflow, anaconda
        ],
    },

    // DENTIST WEBSITE
    {
        icon: dentistIcon,
        title: {
            en: "MEDICAL WEBSITE",
        },
        subtitle: {
            en: "Commercial Website of a Dental Practice in Berlin, Germany.",
            de: "Kommerzielle Webseite einer Zahnmedizinischen Praxis in Berlin.",
            jp: ""
        },
        preview: <>
            <PortfolioImage
                src={dentistPreview}
                alt="Dental Practice Website Preview"
            />
        </>,
        comment: {
            en: `
            I designed and built this website for a dental practice in Berlin, that was 
            looking to upgrade from their website-builder site. The site is built using 
            React and the Contentful CMS, allowing the owners to add news, update any 
            content on the page, and activate/deactivate a job listing component at any time.
            `
        },
        buttons: [
            {
                name: {
                    en: "VISIT",
                    de: "BESUCHEN"
                },
                link: "https://vieth-zahnaerzte.de/"
            },
        ],
        stack: [
            html, css, js, nodejs, react, firebase
        ],
    },

    // ESPORTS WEBSITE
    {
        icon: esportsIcon,
        title: {
            en: "Esports WebDesign",
            de: "Esports WebDesign"
        },
        subtitle: {
            en: "Website Design for an esports organization called Bird Esport.",
            de: "Webseiten Design der Esports Organisation Bird Esports.",
            jp: ""
        },
        preview: <>
            <PortfolioImage
                src={esportsPreview}
                alt="Bird Esports Preview"
            />
        </>,
        comment: {
            en: `
            This website was built for a failed esports organization called Bird Esports.
            The design is based around the League of Legends character Anivia which can be 
            seen in the background. It was designed to have space for calender events, articles,
            team roster announcements, and recruitment, as well as the organization's media
            outputs like Youtube, Twitch.tv, and Twitter. The organization unfortunately went under
            before the website and teams were launched, leaving it unused.
            `,
            de: `
            Diese Webseite war für die Bird Esports Organisation geplant. Das Design basiert auf
            dem League of Legends Charakter Anivia, der im Hintergrund sichtbar ist. Die Webseite
            hat Platz für Kalender Events, Artikel, Team Ankündigungen, und Rekrutierung, sowohl wie
            Medieneinbindungen wie Youtube, Twitch.tv Livestreams, und Twitter Posts. Die Organisation
            wurde leider vor der Vollendung der Webseite gecancelt, wodurch die Seite nie in Verwendung war.
            `
        },
        buttons: [
            {
                name: {
                    en: "VISIT",
                    de: "BESUCHEN"
                },
                link: "https://portfolio-esports.web.app/"
            },
        ],
        stack: [
            html, css, js, gatsby, firebase
        ],
    },

    // DATA VISUALIZATION
    {
        icon: datavizIcon,
        title: {
            en: "Data Visualization",
            de: "Datenvisualisierungen"
        },
        subtitle: {
            en: "SVG-based Custom Data Visualizations about Streaming Services.",
            de: "SVG-basierte Datenvisualisierung über Streaming Services.",
            jp: ""
        },
        preview: <>
            <PortfolioImage
                src={datavizPreview}
                alt="Data Visualization Preview"
            />
        </>,
        comment: {
            en: `
            I built this collection of data vizualisations in the scope of a university 
            assignment using react, three.js, and dynamically-generated svgs. The site 
            is only optimized for desktop.
            `,
            de: `
            Diese Sammlung von Daten Visualisierungen habe ich für den DataViz Kurs des 
            Creative Technology Studiums entwickelt. Es verwendet React, three.js, und 
            dynamisch generierte SVGs. Die Seite ist nur für Desktopansicht optimisiert.
            `
        },
        buttons: [
            {
                name: {
                    en: "VISIT",
                    de: "BESUCHEN"
                },
                link: "https://portfolio-dataviz.web.app/"
            },
        ],
        stack: [
            html, css, js, react, firebase
        ],
    },

    // MEAT MADNESS
    {
        icon: meatIcon,
        title: {
            en: "InfoPage",
            de: "Infoseite"
        },
        subtitle: {
            en: "Accompanying information page for the \"Meat Madness\" Installation.",
            de: "Unterstützende Infoseit für die \"Meat Madness\" Installation.",
            jp: ""
        },
        preview: <>
            <PortfolioImage
                src={meatPreview}
                alt="Meat Madness Preview"
            />
        </>,
        comment: {
            en: `
            This small accompanying info page was built for the Meat Madness physical 
            data visualization, which we built during Module 8 of the Creative Technology
            curriculum. The installation visualized the amount of water used during the 
            production of one kilogram of meat for different types of meat and allowing you
            to compare two types of meat by filling to adjacent, transparent silos with water
            after selecting the types of meat. I also built the entire controller logic for
            the installation, which was written in python and C++. This website primarily
            served as a way to provide additional information about the installation and the
            data it visualized, while also offering viewers of the installation to participate
            in a survey.
            `,
            de: `
            Diese einfache Informationsseite habe ich für die \"Meat Madness\" Datenvisualisierung
            entwickelt. Diese Installation, die wir währen des achten Moduls des Creative Technology
            Programms entwickelt haben, visualisiert den Verbrauch von Wasser während der Produktion
            von verschiedenen Fleischprodukten. Sie erlaubt den Vergleich von Fleisch produkten, in
            dem sie zwei Silos mit Wasser füllt. Diese Webseite dient hauptsächlich der Beilage von
            Informationen und zur Sammlung von Meinungen der Besucher der Installation. Neben der
            Webeite habe ich außerdem die gesamte Controller Logik der Installation in Python und C++
            entwickelt.
            `
        },
        buttons: [
            {
                name: {
                    en: "VISIT",
                    de: "BESUCHEN"
                },
                link: "https://meat-madness.web.app"
            },
        ],
        stack: [
            html, css, js, react, nodejs, firebase
        ],
    },
]