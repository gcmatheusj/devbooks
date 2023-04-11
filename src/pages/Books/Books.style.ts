import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0 20px;

  h1 {
    margin: 24px 0;
    color: #222;
  }

  ul {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    max-width: 1200px;
    width: 100%;
    grid-gap: 16px;
    list-style: none;
  }

  li {
    &:hover {
      div {
        background-color: #ef552b;
      }
    }

    a {
      text-decoration: none;
    }
  }
`

export const Title = styled.h2`
  font-size: 24px;
  margin-top: 16px;
  margin-bottom: 8px;
  color: #222;

  // Exibir o texto em no máximo 2 linhas
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`

export const Subtitle = styled.h3`
  font-weight: normal;
  font-size: 16px;
  color: #222;

  // Exibir o texto em no máximo 2 linhas
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`
