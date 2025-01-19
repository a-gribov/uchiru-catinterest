import { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { fetchCats } from '../api/catsApi'
import CatsList from '../components/CatsList'
import Loader from '../components/Loader'
import catStore from '../store/CatStore'
import { observer } from 'mobx-react-lite'

const AllCats = observer(() => {
  const [page, setPage] = useState(1)

  useEffect(() => {
    if (catStore.allCats.length === 0) {
      loadCats()
    }
  })

  const loadCats = async () => {
    const response = await fetchCats(10, page)
    catStore.addCats(response.data)
    setPage(page + 1)
  }

  return (
    <InfiniteScroll
      dataLength={catStore.allCats.length}
      next={loadCats}
      hasMore={catStore.hasMoreCats}
      loader={<Loader />}
    >
      <CatsList cats={catStore.allCats} />
    </InfiniteScroll>
  )
})

export default AllCats
