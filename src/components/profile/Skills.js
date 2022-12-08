import React from 'react'

import html from '../../images/tech-logos/html.svg'
import css from '../../images/tech-logos/css.svg'
import js from '../../images/tech-logos/js.png'
import python from '../../images/tech-logos/python.svg'
import nodejs from '../../images/tech-logos/nodejs.svg'
import php from '../../images/tech-logos/php.svg'
import mysql from '../../images/tech-logos/mysql.png'
import react from '../../images/tech-logos/react.svg'
import gatsby from '../../images/tech-logos/gatsby.svg'
import nextjs from '../../images/tech-logos/nextjs.svg'
import firebase from '../../images/tech-logos/firebase.svg'
import tailwindcss from '../../images/tech-logos/tailwindcss.svg'
import aws from '../../images/tech-logos/aws.svg'
import tensorflow from '../../images/tech-logos/tensorflow.svg'
import anaconda from '../../images/tech-logos/anaconda.png'


import * as styles from '../../styles/modules/Profile.module.css'

const logos = [
    html, css,
    js, python,
    nodejs,
    php,
    mysql,
    react, gatsby,
    nextjs,
    firebase,
    tailwindcss,
    aws,
    tensorflow,
    anaconda
]

export const Skills = () => {
    return (
        <div className={styles.profileSkillsLogosWrapper}>
            {logos.map((item, i) => (
                <img
                    key={i}
                    src={item}
                    alt="TechStack Logo"
                />
            ))}
        </div>
    )
}
