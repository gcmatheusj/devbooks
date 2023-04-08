import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { GlobalStyles } from './styles/global'

import { Home } from './pages/Home'
import { Books } from './pages/Books'
import { Book } from './pages/Book'

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books />} />
          <Route path="/books/:bookId" element={<Book />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
