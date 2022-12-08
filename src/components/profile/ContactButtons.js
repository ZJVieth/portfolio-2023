import React from 'react'
import { LanguageText } from 'react-language-switch'

import { openTab } from '../../util/navigationUtil'
import { className } from "../../util/stringUtil"

import * as styles from '../../styles/modules/Profile.module.css'

import cvPath from '../../assets/cv.pdf'

export const ContactButtons = () => {

    const copy = (e, txt) => {
        navigator.clipboard.writeText(txt)
        e.target.style.color = "green";
        setTimeout(
            () => { e.target.style.color = "var(--col-text-button)" },
            1000
        )
    }

    return (
        <>
            <button
                className={styles.profileCVButton}
                onClick={() => openTab(cvPath)}
            >
                CV.PDF
            </button>

            <div className={styles.profileContactItemWrapper}>
                +81 90 1265 0627
                <button
                    className={styles.profileContactButton}
                    onClick={() => window?.open("tel:+819012650627", '_self')}
                >
                    <LanguageText name="call" />
                </button>
                <button
                    className={
                        className([
                            styles.profileContactButton,
                            styles.profileContactButtonRight
                        ])
                    }
                    onClick={(e) => copy(e, "+81 90 1265 0627")}
                >
                    <LanguageText name="copy" />
                </button>
            </div>

            <div className={styles.profileContactItemWrapper}>
                zjvieth(at)gmail.com
                <button
                    className={styles.profileContactButton}
                    onClick={() => window?.open("mailto:zjvieth@gmail.com", '_self')}
                >
                    <LanguageText name="email" />
                </button>
                <button
                    className={
                        className([
                            styles.profileContactButton,
                            styles.profileContactButtonRight
                        ])
                    }
                    onClick={(e) => copy(e, "zjvieth@gmail.com")}
                >
                    <LanguageText name="copy" />
                </button>
            </div>
        </>
    )
}
