import { KeyboardEvent, useRef, useState } from 'react'

import { Link } from '../Link'
import { SearchBox } from '../SearchBox'

import {
  Container,
  SearchResult,
  SearchResultBookContainer,
  SeeAllContainer
} from './Search.styles'
import { api } from '../../services/api'
import { Book, SearchResultBook } from '../SearchResultBook/SearchResultBook'
import { SearchLoader } from './SearchLoader'
import { useOutsideInteraction } from '../../hooks/useOutsideInteraction'

interface ResultState {
  items: Book[]
}

export function Search() {
  const [search, setSearch] = useState('')
  const [result, setResult] = useState<ResultState | null>(null)
  const [loading, setLoading] = useState(false)
  const [showResult, setShowResult] = useState(false)
  const searchRef = useRef<HTMLDivElement | null>(null)

  const handleCloseResult = () => {
    setShowResult(false)
  }

  useOutsideInteraction(searchRef, handleCloseResult)

  const handleSearch = async () => {
    if (search) {
      setLoading(true)
      setShowResult(true)

      const maxResults = 3
      const { data } = await api.get(
        `/books?q=${search}&maxResults=${maxResults}`
      )

      setResult(data)
      setLoading(false)
    }
  }

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch()
    }
  }

  return (
    <Container ref={searchRef}>
      <SearchBox
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleKeyPress}
      />

      {showResult && (
        <SearchResult>
          <span>Resultado da Busca</span>

          <SearchResultBookContainer>
            {result && !loading ? (
              result.items.map((item) => (
                <SearchResultBook key={item.id} book={item} />
              ))
            ) : (
              <SearchLoader />
            )}
          </SearchResultBookContainer>

          <SeeAllContainer>
            <Link to={`/livros?q=${search}`}>Ver Todos</Link>
          </SeeAllContainer>
        </SearchResult>
      )}
    </Container>
  )
}
