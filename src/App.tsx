import { ThemeProvider } from 'styled-components'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { GlobalStyles } from './styles/global'
import { theme } from './styles/theme'

import { Home } from './pages/Search'
import { Books } from './pages/Books'
import { Book } from './pages/BookDetail'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books />} />
          <Route path="/books/:bookId" element={<Book />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
