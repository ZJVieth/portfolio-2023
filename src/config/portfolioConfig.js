import React from 'react'

import html from '../images/tech-logos/html.svg'
import css from '../images/tech-logos/css.svg'
import js from '../images/tech-logos/js.png'
import php from '../images/tech-logos/php.svg'
import mysql from '../images/tech-logos/mysql.png'

import devcommendIcon from '../images/showroomIcons/devcommendIcon.png'

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
                height="400px"
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
    }

    // 3D DEEP LEARNING
]