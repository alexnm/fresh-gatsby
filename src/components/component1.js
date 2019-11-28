import React from 'react'

import styles from './component1.module.css'

const Component1 = (props) => {
  return (
    <div className={styles.container}>
      <a href="#" target="_blank" className={styles.link}>
        Link
      </a>
      <h1 className={styles.heading1}>Heading Level 1</h1>
      <p className={styles.textblock}>Paragraph</p>
      <a href="#" target="_blank" className={styles.link1}>
        Link
      </a>
    </div>
  )
}

export default Component1
