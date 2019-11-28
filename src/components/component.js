import React from 'react'

import styles from './component.module.css'

const AppComponent = (props) => {
  return (
    <div className={styles.component}>
      <Component1></Component1>
      <img src="/playground_assets/IMG_20190123_134309-PANO.jpg" className={styles.image} />
      <img src="/playground_assets/IMG_20190123_135833.jpg" className={styles.image1} />
    </div>
  )
}

export default AppComponent
