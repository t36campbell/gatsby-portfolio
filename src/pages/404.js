import React from "react"
import Main_Layout from "../components/main_layout/index"
import SEO from "../components/seo/index"

const NotFoundPage = () => (
  <Main_Layout>
    <SEO title="404" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Main_Layout>
)

export default NotFoundPage
