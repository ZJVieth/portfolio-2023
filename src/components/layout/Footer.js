import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import StarSkyComponent from '../StarSkyComponent'

import * as styles from '../../styles/modules/Footer.module.css'

export const Footer = () => {
    return (
        <StarSkyComponent>
            <div className={styles.footerInnerWrapper}>
                <div className={styles.footerItemWrapper}>
                    <a
                        href="https://twitter.com/dulacre_mi"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <StaticImage
                            src='../../images/socials/twitter.png'
                            alt="Twitter"
                        />
                    </a>
                </div>
                <div className={styles.footerItemWrapper}>
                    <a
                        href="https://github.com/ZJVieth"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <StaticImage
                            src='../../images/socials/github2.png'
                            alt="GitHub"
                        />
                    </a>
                </div>
                <div className={styles.footerItemWrapper}>
                    <a
                        href="https://linkedin.com/in/zinojvieth"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <StaticImage
                            src='../../images/socials/linkedin.png'
                            alt="LinkedIn"
                        />
                    </a>
                </div>
            </div>
        </StarSkyComponent>
    )
}