import * as React from "react"
import { LanguageText } from 'react-language-switch'

import Layout from "../components/Layout"
import Seo from "../components/Seo"

import { ContactButtons } from "../components/profile/ContactButtons"

import * as styles from '../styles/modules/Profile.module.css'
import { Skills } from "../components/profile/Skills"
import { Education } from "../components/profile/Education"
import { WorkExperience } from "../components/profile/WorkExperience"

const ProfilePage = () => {

    return (
        <Layout>
            <div className={styles.profileInnerWrapper}>

                <div className={styles.profileContactWrapper}>
                    <ContactButtons />
                </div>

                <div className={styles.profileIntroWrapper}>
                    <LanguageText name="introduction" />
                </div>

                <div className={styles.profileSkillsWrapper}>
                    <h4>
                        <LanguageText name="skillsTitle" />
                    </h4>
                    <Skills />
                </div>

                <div className={styles.profileWorkWrapper}>
                    <h4>
                        <LanguageText name="workTitle" />
                    </h4>
                    <WorkExperience />
                </div>

                <div className={styles.profileEducationWrapper}>
                    <h4>
                        <LanguageText name="educationTitle" />
                    </h4>
                    <Education />
                </div>
            </div>
        </Layout>
    )
}

export default ProfilePage

export const Head = () => <Seo title="Profile" />
