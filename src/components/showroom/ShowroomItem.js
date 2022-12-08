import React from 'react'
import { useLanguage } from 'react-language-switch'
import DeviceOption from 'react-device-manager'

import { openTab } from '../../util/navigationUtil'

import * as styles from '../../styles/modules/Showroom.module.css'

export const ShowroomItem = ({ item }) => {

    const lang = useLanguage().get()

    return (
        <div className={styles.showroomItemWrapper}>

            {/* ICON AND TITLE ------------------------- */}
            <div className={styles.showroomItemTopRow}>
                <DeviceOption device="mobile">
                    <div
                        className={styles.showroomItemIconWrapper}
                        style={{
                            backgroundImage: `url(${item.icon})`
                        }}
                    >
                    </div>
                </DeviceOption>
                <div className={styles.showroomItemTitleWrapper}>
                    <h4>
                        {item.title[lang]}
                    </h4>
                </div>
            </div>

            {/* SUBTITLE ------------------------------- */}
            <div className={styles.showroomItemSubtitleWrapper}>
                <h5>
                    {item.subtitle[lang]}
                </h5>
            </div>

            <div className={styles.showroomItemPreviewWrapper}>
                {item.preview}
            </div>

            <div className={styles.showroomItemCommentWrapper}>
                {item.comment[lang]}
            </div>

            <div className={styles.showroomItemButtonsWrapper}>
                {item.buttons.map((buttonItem) => (
                    <button
                        key={buttonItem.name}
                        onClick={() => openTab(buttonItem.link)}
                    >
                        {buttonItem.name}
                    </button>
                ))}
            </div>

            <div className={styles.showroomItemTechStackWrapper}>
                {item.stack.map((stackItem) => (
                    <img
                        key={stackItem}
                        src={stackItem}
                        alt="TechStack Logo"
                    />
                ))}
            </div>
        </div>
    )
}