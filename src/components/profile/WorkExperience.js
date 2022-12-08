import React from 'react'
import { useLanguage } from 'react-language-switch'

import * as styles from '../../styles/modules/Profile.module.css'

export const WorkExperience = () => {

    const workExperience = useLanguage().getContent("workExperience")
    console.log(workExperience)

    if (!workExperience || workExperience === "undefined")
        return null

    return (
        <div className={styles.profileWorkInnerWrapper}>
            {workExperience.map((item) => (
                <div className={styles.profileWorkItemWrapper}>
                    <strong>
                        {item.title}
                    </strong>
                    <br />
                    <i>
                        {item.period}
                    </i>
                    <br />
                    @{item.company}
                </div>
            ))}
        </div>
    )
}
