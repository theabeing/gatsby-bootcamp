import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

const AboutPage = () => {
    return (
        <Layout>
            <Head title="About" />
            <h2>About Me</h2>
            <h3>Hi, I'm Arthur Grohe, a software developer living in Trier.</h3>
            <Link to="/contact" >Go to contact page</Link>
        </Layout>
    )
}

export default AboutPage