import React from 'react'

// Components
import Layout from '../components/layout/index'
import SEO from '../components/seo'

import Content from '../templates/home/index'

export default () => {
    return (
        <Layout>
            <SEO title={`Title`}/>
            <Content />
        </Layout>
    )
}