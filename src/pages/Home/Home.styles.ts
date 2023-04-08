import styled from 'styled-components'
import { Link as L } from 'react-router-dom'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;

  h1 {
    margin-bottom: 24px;
    color: #222;
  }
`

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  width: 800px;
`

export const Link = styled(L)`
  padding: 14px 12px;
  border-radius: 32px;
  background-color: #ef552b;
  color: #fff;
  font-weight: bold;
  align-self: start;
  font-size: 14px;
  text-decoration: none;
  margin-left: 8px;
`
