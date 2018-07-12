import React from 'react'

import styles from './about.module.css'

const User = props => (
    <div className={styles.user}>
        <img src={props.avatar} className={styles.avatar} alt="" />
        <div className={styles.description}>
            <h2 className={styles.username}>{props.username}</h2>
            <p className={styles.excerpt}>{props.excerpt}</p>
        </div>
    </div>
)

export default ({data}) => (
    <div>
        <h1>{data.site.siteMetadata.title}</h1>
        <p>CSS Modules are cool</p>
        <User
            username="Jane Doe"
            avatar="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
            excerpt="I'm Jane Doe. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        />

        <User
            username="Bob Smith"
            avatar="https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg"
            excerpt="I'm Bob smith, a vertically aligned type of guy. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        />
    </div>
)

export const query = graphql`
    query AboutQuery {
        site {
            siteMetadata {
                title
            }
        }
    }
`
