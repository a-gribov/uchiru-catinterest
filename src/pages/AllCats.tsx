import { useEffect, useState, useCallback } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { fetchCats } from '../api/catsApi'
import CatsList from '../components/CatsList'
import Loader from '../components/Loader'
import catStore from '../store/CatStore'
import { observer } from 'mobx-react-lite'

const AllCats = observer(() => {
  const [page, setPage] = useState(1)

  const loadCats = useCallback(async () => {
    const response = await fetchCats(10, page)
    catStore.addCats(response.data)
    setPage((prevPage) => prevPage + 1)
  }, [page])

  const checkForScroll = useCallback(() => {
    const { scrollHeight, clientHeight } = document.documentElement
    if (scrollHeight <= clientHeight && catStore.hasMoreCats) {
      loadCats()
    }
  }, [loadCats])

  useEffect(() => {
    if (catStore.allCats.length === 0) {
      loadCats()
    }
    checkForScroll()
    window.addEventListener('resize', checkForScroll)
    return () => window.removeEventListener('resize', checkForScroll)
  }, [loadCats, checkForScroll])

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
