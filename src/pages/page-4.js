import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const FourthPage = () => (
  <Layout>
    <SEO title="Page four" />
    <h1>Hi from the four page</h1>
    <p>Welcome to page 4</p>
    <Link to="/page-4/">Go to page 4</Link>
  </Layout>
)

export default FourthPage