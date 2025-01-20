import { observer } from 'mobx-react-lite'
import { useNavigate } from 'react-router-dom'
import CatsList from '../components/CatsList'
import EmptyState from '../components/EmptyState'
import catStore from '../store/CatStore'

const FavoriteCats = observer(() => {
  const navigate = useNavigate()
  const hasFavorites = catStore.favoriteCats.length > 0

  return (
    <div>
      {hasFavorites ? (
        <CatsList cats={catStore.favoriteCats} />
      ) : (
        <EmptyState
          message="У вас пока нет любимых котиков."
          buttonText="Посмотреть всех котиков"
          onButtonClick={() => navigate('/')}
        />
      )}
    </div>
  )
})

export default FavoriteCats
