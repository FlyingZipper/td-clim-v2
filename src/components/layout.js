/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import Header from './Header'
import Footer from './Footer'
import MessengerCustomerChat from 'react-messenger-customer-chat';
//import { StaticQuery, graphql } from 'gatsby'

const Layout = ({ children }) => (
  <div>
    <Header />
    <main>{children}</main>
    <MessengerCustomerChat
    pageId="1483221775128981"
    appId="438507940261306"
    />
    <Footer />
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
