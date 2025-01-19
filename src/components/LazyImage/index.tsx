import React, { useState } from 'react'
import styles from './index.module.scss'

interface LazyImageProps {
  src: string
  alt: string
}

const LazyImage: React.FC<LazyImageProps> = ({ src, alt }) => {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className={styles.lazyImage}>
      {!loaded && <div className={styles.skeleton}></div>}
      <img
        src={src}
        alt={alt}
        draggable="false"
        onLoad={() => setLoaded(true)}
        className={`${styles.image} ${loaded ? styles.loaded : ''}`}
      />
    </div>
  )
}

export default LazyImage
