import { makeAutoObservable } from 'mobx'

export interface Cat {
  id: string
  url: string
}

class CatStore {
  allCats: Cat[] = []
  favoriteCats: Cat[] = JSON.parse(localStorage.getItem('favoriteCats') || '[]')
  hasMoreCats: boolean = true

  constructor() {
    makeAutoObservable(this)
  }

  addCats(cats: Cat[]) {
    if (cats.length === 0) {
      this.hasMoreCats = false
      return
    }
    this.allCats = [...this.allCats, ...cats]
  }

  toggleFavorite(cat: Cat) {
    if (this.isFavorite(cat.id)) {
      this.favoriteCats = this.favoriteCats.filter((fav) => fav.id !== cat.id)
    } else {
      this.favoriteCats.push(cat)
    }
    localStorage.setItem('favoriteCats', JSON.stringify(this.favoriteCats))
  }

  isFavorite(catId: string) {
    return this.favoriteCats.some((cat) => cat.id === catId)
  }
}

export default new CatStore()
