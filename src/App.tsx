import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import ScrollToTop from './components/ScrollToTop'
import AllCats from './pages/AllCats'
import FavoriteCats from './pages/FavoriteCats'
import RouteTitleUpdater from './components/RouteTitleUpdater'

const App = () => (
  <Router basename="/uchiru-catinterest">
    <ScrollToTop />
    <RouteTitleUpdater />
    <Header />
    <div className="container">
      <Routes>
        <Route path="/" element={<AllCats />} />
        <Route path="/favorites" element={<FavoriteCats />} />
      </Routes>
    </div>
  </Router>
)

export default App
