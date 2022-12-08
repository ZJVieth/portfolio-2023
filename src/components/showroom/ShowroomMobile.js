import React from 'react'

import { ShowroomItem } from './ShowroomItem'

import * as styles from '../../styles/modules/Showroom.module.css'

export const ShowroomMobile = ({ items }) => {

    return (
        <div className={styles.showroomInnerWrapper}>
            {
                items.map(
                    (item) => <ShowroomItem item={item} />
                )
            }
        </div>
    )
}
