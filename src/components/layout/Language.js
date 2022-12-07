import React, { useState, useEffect } from 'react'
import { useLanguage } from 'react-language-switch'

import { className } from '../../util/stringUtil'

import StarSkyComponent from '../StarSkyComponent'

import * as styles from '../../styles/modules/Language.module.css'
import { wrapRest } from '../../util/mathUtil'
import Germany from './LanguageSVGs/Germany'
import Global from './LanguageSVGs/Global'
import Japan from './LanguageSVGs/Japan'


const languages = [
    'en', 'de', 'jp'
]

const rotationStyles = [
    styles.rotationSelected,
    styles.rotationPos1,
    styles.rotationPos2
]

const getPositions = (lang) => {

    const startIndex = languages.indexOf(lang)
    const output = {}
    for (let i = 0; i < languages.length; i++) {
        const currIndex = wrapRest(0, languages.length - 1, startIndex + i)
        output[languages[currIndex]] = rotationStyles[i]
    }
    return output
}

export const LanguageWheel = () => {

    const lang = useLanguage()

    const updateLang = (langIn) => {
        lang.set(langIn)
    }

    const positions = getPositions(lang.get())
    console.log(lang.get())

    return (
        <StarSkyComponent>
            <div className={styles.languageInnerWrapper}>
                <div className={styles.languageWheelCircle}>
                </div>
                <div className={
                    className([
                        styles.languageRotator,
                        positions.en
                    ])
                }>
                    <div
                        className={
                            className([
                                styles.languageCircle,
                                (lang.get() === 'en') ? styles.languageCircleSelected : ''
                            ])
                        }
                        onClick={() => updateLang('en')}
                    >
                        <Global />
                    </div>
                </div>
                <div className={
                    className([
                        styles.languageRotator,
                        positions.de
                    ])
                }>
                    <div
                        className={
                            className([
                                styles.languageCircle,
                                (lang.get() === 'de') ? styles.languageCircleSelected : ''
                            ])
                        }
                        onClick={() => updateLang('de')}
                    >
                        <Germany />
                    </div>
                </div>
                <div className={
                    className([
                        styles.languageRotator,
                        positions.jp
                    ])
                }>
                    <div
                        className={
                            className([
                                styles.languageCircle,
                                (lang.get() === 'jp') ? styles.languageCircleSelected : ''
                            ])
                        }
                        onClick={() => updateLang('jp')}
                    >
                        <Japan />
                    </div>
                </div>
            </div>
        </StarSkyComponent>
    )
}
