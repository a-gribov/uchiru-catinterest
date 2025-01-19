import { observer } from 'mobx-react-lite'
import CatsList from '../components/CatsList'
import catStore from '../store/CatStore'

const FavoriteCats = observer(() => <CatsList cats={catStore.favoriteCats} />)

export default FavoriteCats
