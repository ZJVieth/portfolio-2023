import * as React from "react"
import { useLanguage, LanguageText } from 'react-language-switch'

import Layout from "../components/Layout"
import Seo from "../components/Seo"

import * as styles from '../styles/modules/Contact.module.css'

const ContactPage = () => {

    const lang = useLanguage()

    const submitForm = (e) => {
        e.preventDefault()

        console.log(e.target.children)

        const output = {}
        for (let el of e.target.elements) {

            console.log(el.classList)

            if (!el.name)
                continue

            if (!el.value) {
                el.classList.add(styles.error)
                continue
            }

            el.classList.remove(styles.error)
            output[el.name] = el.value
        }

        if (Object.keys(output).length < 3)
            return

        const options = Object.keys(output).map(key => `${key}=${output[key]}`).join("&")
        fetch(`https://europe-west2-portfolio-website-9bde1.cloudfunctions.net/sendContactMail?${options}`)
            .then(() => {
                for (let el of e.target.elements) {
                    el.value = ""
                }
                alert("Your message was sent.")
            })
            .catch(() => alert("An error occured while trying to send your message."))
    }

    return (
        <Layout>
            <div className={styles.contactInnerWrapper}>
                <div className={styles.contactTextWrapper}>
                    <LanguageText name="contactText" />
                </div>
                <form
                    onSubmit={(e) => submitForm(e)}
                >
                    <input
                        type="text"
                        name="name"
                        placeholder={lang.getContent("contactNamePlaceholder")}
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder={lang.getContent("contactEmailPlaceholder")}
                    />
                    <textarea
                        name="message"
                        placeholder={lang.getContent("contactMessagePlaceholder")}
                    ></textarea>
                    <input
                        className={styles.contactSubmitButton}
                        type="submit"
                        value={lang.getContent("contactSubmitText")}
                    />
                </form>
            </div>
        </Layout>
    )
}

export default ContactPage

export const Head = () => <Seo title="Contact" />
