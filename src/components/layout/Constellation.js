import React, { useState, useEffect } from 'react'

import { wrap } from '../../util/mathUtil'
import { className } from '../../util/stringUtil'

import StarSkyComponent from '../StarSkyComponent'

import manConstellation from '../../images/constellations/profile.svg'
import featherConstellation from '../../images/constellations/feather.svg'
import bookConstellation from '../../images/constellations/book.svg'
import emptynetConstellation from '../../images/constellations/emptynet.svg'

import * as styles from '../../styles/modules/Constellation.module.css'

const constellations = [
    manConstellation,
    featherConstellation,
    bookConstellation,
    emptynetConstellation
]

export const Constellation = () => {

    const [currConstellation, setCurrConstellation] = useState(-1)

    useEffect(() => {
        const constellationInterval = setInterval(function () {
            setCurrConstellation(wrap(0, constellations.length - 1, currConstellation + 1))
        }, 4000);

        return () => {
            clearInterval(constellationInterval)
        }
    }, [currConstellation])

    return (
        <StarSkyComponent>
            {constellations.map((item, i) => (
                <img
                    key={i}
                    src={item}
                    alt="Custom Constellation"
                    className={
                        className([
                            styles.constellationImage,
                            (currConstellation === i) ? styles.constellationShown : styles.constellationHidden
                        ])
                    }
                />
            ))}
        </StarSkyComponent>
    )
}
