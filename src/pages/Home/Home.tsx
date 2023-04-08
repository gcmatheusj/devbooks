import { useState } from 'react'
import { SearchContainer, Link, Container } from './Home.styles'

import { SearchBox } from '../../components/SearchBox'

export function Home() {
  const [search, setSearch] = useState('')

  return (
    <Container>
      <h1>Busque seu livro favorito</h1>

      <SearchContainer>
        <SearchBox
          name="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <Link to={`/books?q=${search}`}>Buscar</Link>
      </SearchContainer>
    </Container>
  )
}
