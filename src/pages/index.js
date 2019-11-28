import React from 'react'
import Helmet from 'react-helmet'

import AppComponent from '../components/component'
import NewComponent from '../components/new-component'
import styles from './index.module.css'

const Page = (props) => {
  return (
    <div className={styles.page}>
      <Helmet>
        <title>fresh</title>
      </Helmet>
      <AppComponent></AppComponent>
      <NewComponent></NewComponent>
      <img
        src="https://images.unsplash.com/photo-1574799398037-f566f493475b?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjkxMzIxfQ"
        className={styles.image}
      />
    </div>
  )
}

export default Page
