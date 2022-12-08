import React from 'react'
import { useLanguage } from 'react-language-switch'

import * as styles from '../../styles/modules/Profile.module.css'

export const Education = () => {

    const educationItems = useLanguage().getContent("education")

    if (!educationItems || educationItems === "undefined")
        return null

    return (
        <div className={styles.profileEducationInnerWrapper}>
            {educationItems.map((item) => (
                <div
                    key={item.diploma}
                    className={styles.profileEducationItemWrapper}
                >
                    <div className={styles.profileEducationDiplomaWrapper}>
                        {item.diploma}
                    </div>

                    <div className={styles.profileEducationTextWrapper}>
                        <div>
                            {item.title ? <>
                                <strong>{item.title}</strong>
                                <br />
                            </> : null}
                            <i>{item.institution}</i>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
