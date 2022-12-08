import * as React from "react"
import DeviceOption from 'react-device-manager'

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import { ShowroomDesktop } from "../components/showroom/ShowroomDesktop"
import { ShowroomMobile } from "../components/showroom/ShowroomMobile"

import { portfolioItems } from '../config/portfolioConfig.js'

const IndexPage = () => {
  return (
    <Layout>
      <DeviceOption device="mobile">
        <ShowroomMobile items={portfolioItems} />
      </DeviceOption>
      <DeviceOption device="desktop">
        <ShowroomDesktop items={portfolioItems} />
      </DeviceOption>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <Seo title="Showroom" />
