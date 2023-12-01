// 10-4-4 범용 데이터 조회

import { AuthorsIndex } from './components/pages/AuthorsIndex.js'
import { Author } from './components/pages/Author.js'
import { FourOhFour } from './components/pages/FourOhFour.js'

export const routes = [
  {
    path: '/',
    exact: true,
    component: AuthorsIndex
  },
  {
    path: '/author/:authorId',
    component: Author
  },
  {
    path: '*',
    component: FourOhFour
  }
]