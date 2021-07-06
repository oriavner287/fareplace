import React from 'react'
import PropTypes from 'prop-types'
import Nav from '@src/components/Nav'

function Layout({ children }) {
    return (
        <React.Fragment>
            <Nav />
            <main>{children}</main>
        </React.Fragment>
    )
}

Layout.propTypes = {
    children: PropTypes.object.isRequired
}

export default Layout
