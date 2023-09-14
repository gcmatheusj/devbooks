import { Link } from 'react-router-dom'

import { Logo } from '../Logo'
import { SearchBox } from '../SearchBox'

import {
  Avatar,
  Container,
  HeaderContainer,
  NavContainer
} from './Header.styles'

export function Header() {
  return (
    <Container>
      <HeaderContainer>
        <NavContainer>
          <Logo />

          <nav>
            <Link to="/home">Home</Link>
            <Link to="/meus-livros">Meus Livros</Link>
            <Link to="/favoritos">Favoritos</Link>
          </nav>

          <SearchBox />
        </NavContainer>

        <Avatar>
          <span>MC</span>
        </Avatar>
      </HeaderContainer>
    </Container>
  )
}
