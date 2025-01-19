import React from 'react'
import CatCard from '../CatCard'
import { Cat } from '../../store/CatStore'
import styles from './index.module.scss'

interface CatsListProps {
  cats: Cat[]
}

const CatsList: React.FC<CatsListProps> = ({ cats }) => (
  <div className={styles.catsList}>
    {cats.map((cat, index) => (
      <CatCard key={`${cat.id}-${index}`} cat={cat} />
    ))}
  </div>
)

export default CatsList
