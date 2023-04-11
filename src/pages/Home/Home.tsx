import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { SearchContainer, Container, SearchButton } from './Home.styles'

import { SearchBox } from '../../components/SearchBox'

export function Home() {
  const [search, setSearch] = useState('')
  const navigate = useNavigate()

  const handleSearch = () => {
    if (search) {
      navigate(`/books?q=${search}`)
    }
  }

  return (
    <Container>
      <h1>Busque seu livro favorito</h1>

      <SearchContainer>
        <SearchBox
          name="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <SearchButton onClick={handleSearch}>Buscar</SearchButton>
      </SearchContainer>
    </Container>
  )
}
