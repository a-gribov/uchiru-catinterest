import { useEffect, useState, useCallback } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { fetchCats } from '../api/catsApi'
import CatsList from '../components/CatsList'
import Loader from '../components/Loader'
import catStore from '../store/CatStore'
import { observer } from 'mobx-react-lite'

const AllCats = observer(() => {
  const [page, setPage] = useState(1)
  const [isLoading, setIsLoading] = useState(false)

  const loadCats = useCallback(async () => {
    if (isLoading) return
    setIsLoading(true)
    try {
      const response = await fetchCats(15, page)
      catStore.addCats(response.data)
      setPage((prevPage) => prevPage + 1)
    } finally {
      setIsLoading(false)
    }
  }, [page, isLoading])

  useEffect(() => {
    if (catStore.allCats.length === 0) {
      loadCats()
    }
  }, [loadCats])

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
