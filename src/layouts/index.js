import React from 'react'
import Link from "gatsby-link";

import Container from '../components/container'

const ListLink = props =>
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>
      {props.children}
    </Link>
  </li>

export default ({ children }) =>
  <Container>
    <header style={{ marginBottom: `1.5rem` }}>
      <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
        <h3 style={{ display: `inline` }}>MySweetSite</h3>
      </Link>
      <ul style={{ listStyle: `none`, float: `right` }}>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/about/">About</ListLink>
        <ListLink to="/counter/">Counter</ListLink>
        <ListLink to="/page-2/">Page 2</ListLink>
        <ListLink to="/files/">Files</ListLink>
      </ul>
    </header>
    {children()}
  </Container>