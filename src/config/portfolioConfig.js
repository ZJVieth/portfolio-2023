import React from 'react'

import html from '../images/tech-logos/html.svg'
import css from '../images/tech-logos/css.svg'
import js from '../images/tech-logos/js.png'
import php from '../images/tech-logos/php.svg'
import mysql from '../images/tech-logos/mysql.png'

import devcommendIcon from '../images/showroomIcons/devcommendIcon.png'
import catenaryIcon from '../images/showroomIcons/catenary.png'

import catenaryPreview from '../images/showroomPreviews/catenary_poster.png'
import { openTab } from '../util/navigationUtil'

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
        },
        preview: <>
            <PortfolioImage
                src={catenaryPreview}
                alt="3D Deep Learning Pipeline Poster"
            />
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
    }
]