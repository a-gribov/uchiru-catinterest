import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const RouteTitleUpdater = () => {
  const location = useLocation()

  useEffect(() => {
    switch (location.pathname) {
      case '/':
        document.title = 'Все котики'
        break
      case '/favorites':
        document.title = 'Любимые котики'
        break
      default:
        document.title = 'Cat Pinterest'
    }
  }, [location])

  return null
}

export default RouteTitleUpdater
