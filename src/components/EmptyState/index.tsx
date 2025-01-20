import React from 'react'
import styles from './index.module.scss'
import { Link } from 'react-router-dom'

interface EmptyStateProps {
  message: string
  buttonText: string
  onButtonClick: () => void
}

const EmptyState: React.FC<EmptyStateProps> = ({ message, buttonText }) => {
  return (
    <div className={styles.emptyState}>
      <p className={styles.message}>{message}</p>

      <Link to="/" className={styles.link}>
        {buttonText}
      </Link>
    </div>
  )
}

export default EmptyState
