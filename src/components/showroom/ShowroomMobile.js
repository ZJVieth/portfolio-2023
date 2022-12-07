import React from 'react'
import { useLanguage } from 'react-language-switch'

import * as styles from '../../styles/modules/Showroom.module.css'
import { openTab } from '../../util/navigationUtil'

export const ShowroomMobile = ({ items }) => {

    const lang = useLanguage().get()

    return (
        <div className={styles.showroomInnerWrapper}>
            {
                items.map((item) => (
                    <div className={styles.showroomItemWrapper}>

                        {/* ICON AND TITLE ------------------------- */}
                        <div className={styles.showroomItemTopRow}>
                            <div
                                className={styles.showroomItemIconWrapper}
                                style={{
                                    backgroundImage: `url(${item.icon})`
                                }}
                            >
                            </div>
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
                            {item.buttons.map((item) => (
                                <button
                                    onClick={() => openTab(item.link)}
                                >
                                    {item.name}
                                </button>
                            ))}
                        </div>

                        <div className={styles.showroomItemTechStackWrapper}>
                            {item.stack.map((item) => (
                                <img
                                    key={item}
                                    src={item}
                                />
                            ))}
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
