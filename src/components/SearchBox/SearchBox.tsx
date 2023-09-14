import { InputHTMLAttributes } from 'react'

import { Container } from './SearchBox.styles'

import { ReactComponent as SearchIcon } from '../../icons/search.svg'

type SearchBoxProps = InputHTMLAttributes<HTMLInputElement>

export function SearchBox(props: SearchBoxProps) {
  return (
    <Container>
      <SearchIcon />
      <input placeholder="Encontre seu livro favorito" {...props} />
    </Container>
  )
}
