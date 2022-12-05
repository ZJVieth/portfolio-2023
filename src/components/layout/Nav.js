import React from 'react'
import { Link } from 'gatsby'

import StarSkyComponent from '../StarSkyComponent'

import * as styles from '../../styles/modules/Nav.module.css'

export const Nav = () => {
    return (
        <StarSkyComponent>
            <div class={styles.navInnerWrapper}>
                <Link
                    to="/"
                    activeClassName={styles.navActive}
                >
                    <div className={styles.navItemWrapper}>
                        Home
                    </div>
                </Link>
                <Link
                    to="/profile"
                    activeClassName={styles.navActive}
                >
                    <div className={styles.navItemWrapper}>
                        Profile
                    </div>
                </Link>
                <Link
                    to="/contact"
                    activeClassName={styles.navActive}
                >
                    <div className={styles.navItemWrapper}>
                        Contact
                    </div>
                </Link>
            </div>
        </StarSkyComponent>
    )
}
