import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;

  h1 {
    margin: 24px 0;
    color: #222;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    list-style: none;
    gap: 16px;
    margin: 0 20px;
  }

  li {
    width: 300px;

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

export const Cape = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  width: 300px;
  background-color: #d9d9d9;
  border-radius: 4px;
  transition: all 0.5s;

  svg {
    width: 120px;
    color: #fff;
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
