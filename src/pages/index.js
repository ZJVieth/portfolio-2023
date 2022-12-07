import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"

import { ShowroomMobile } from "../components/showroom/ShowroomMobile"

import { portfolioItems } from '../config/portfolioConfig.js'

const IndexPage = () => {
  return (
    <Layout>
      <ShowroomMobile items={portfolioItems} />
    </Layout>
  )
}

export default IndexPage

export const Head = () => <Seo title="Showroom" />
