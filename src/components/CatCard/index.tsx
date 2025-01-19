import React from 'react'
import { observer } from 'mobx-react-lite'
import { useState } from 'react'
import catStore, { Cat } from '../../store/CatStore'
import styles from './index.module.scss'
import LazyImage from '../LazyImage'
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md'

interface CatCardProps {
  cat: Cat
}

const CatCard: React.FC<CatCardProps> = observer(({ cat }) => {
  const isFavorite = catStore.isFavorite(cat.id)
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className={styles.card}>
      <LazyImage src={cat.url} alt="Cat" />
      <button
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`${styles.heartButton} ${
          isFavorite ? styles.favorite : ''
        } ${isHovered ? styles.hovered : ''}`}
        onClick={() => catStore.toggleFavorite(cat)}
      >
        <MdFavorite className={styles.iconFavorite} />
        <MdFavoriteBorder className={styles.iconFavoriteBorder} />
      </button>
    </div>
  )
})

export default CatCard
