import React from 'react'

import StarSkyComponent from '../StarSkyComponent'

import twitter from '../../images/socials/twitter.png'
import linkedin from '../../images/socials/linkedin.png'
import github from '../../images/socials/github.png'

import * as styles from '../../styles/modules/Footer.module.css'

const footerItems = [
    {
        name: "Twitter",
        image: twitter,
        link: "https://twitter.com/dulacre_mi"
    },
    {
        name: "Github",
        image: github,
        link: "https://github.com/ZJVieth"
    },
    {
        name: "LinkedIn",
        image: linkedin,
        link: "https://linkedin.com/in/zinojvieth"
    }
]

export const Footer = () => {
    return (
        <StarSkyComponent>
            <div className={styles.footerInnerWrapper}>
                {footerItems.map((item) => (
                    <a
                        href={item.link}
                        key={item.name}
                        target="_blank"
                    >
                        <img
                            src={item.image}
                            alt={item.name}
                        />
                    </a>
                ))}
            </div>
        </StarSkyComponent>
    )
}
