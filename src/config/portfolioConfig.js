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

import devcommendIcon from '../images/showroomIcons/devcommendIcon.png'
import catenaryIcon from '../images/showroomIcons/catenary.png'
import dentistIcon from '../images/showroomIcons/dentist.png'
import datavizIcon from '../images/showroomIcons/datavizIcon.png'

import catenaryPreview from '../images/showroomPreviews/catenary_poster.png'
import dentistPreview from '../images/showroomPreviews/dentist_preview.png'
import datavizPreview from '../images/showroomPreviews/dataviz.png'

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
        },
        subtitle: {
            en: "The in-portfolio developer endorsement platform.",
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
            en: `
                DevCommend is my web-component and GitHub OAuth2-based platform for 
                software developers to commend each other on their portfolio.
                The styling of the management website and the insertable web component
                itself is based on GitHub's styling. 
            `
        },
        buttons: [
            {
                name: "COMMEND.DEV",
                link: "https://commend.dev"
            },
            {
                name: "NPM",
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
            CAD model of the scanned arch.
            `
        },
        buttons: [
            {
                name: "READ PAPER",
                link: "http://essay.utwente.nl/89565/1/vieth_BA_eemcs.pdf"
            },
            {
                name: "PRESENTATION",
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
            looking to upgrade from theirwebsite-builder site. The site is built using 
            React and the Contentful CMS, allowing the owners to add news, update any 
            content on the page, and activate/deactivate a job listing component at any time.
            `
        },
        buttons: [
            {
                name: "VISIT",
                link: "https://vieth-zahnaerzte.de/"
            },
        ],
        stack: [
            html, css, js, nodejs, react, firebase
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
                name: "VISIT",
                link: "https://portfolio-dataviz.web.app/"
            },
        ],
        stack: [
            html, css, js, react, firebase
        ],
    }
]