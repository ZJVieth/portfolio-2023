import React, { useState } from 'react'

import { className } from '../../util/stringUtil'

import { ShowroomItem } from './ShowroomItem'

import * as styles from '../../styles/modules/Showroom.module.css'

export const ShowroomDesktop = ({ items }) => {

    const [selected, setSelected] = useState(0)

    return (
        <div className={styles.showroomInnerWrapper}>
            <div className={styles.showroomSelectionWrapper}>
                {items.map((item, i) => (
                    <div
                        className={
                            className([
                                styles.showroomSelectionIconWrapper,
                                (i === selected) ? styles.showroomSelectionIconWrapperSelected : ''
                            ])
                        }
                        style={{
                            backgroundImage: `url(${item.icon})`
                        }}
                        onClick={() => setSelected(i)}
                    >
                    </div>
                ))}
            </div>
            <ShowroomItem item={items[selected]} />
        </div>
    )
}
