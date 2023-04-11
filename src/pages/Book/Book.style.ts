import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  background-color: #fff;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 50%;
  padding: 48px;
  overflow-y: scroll;

  h2 {
    font-size: 54px;
  }

  h3 {
    font-weight: normal;
    margin-bottom: 16px;
    font-size: 36px;
  }

  div {
    margin-top: 44px;
  }

  p {
    font-size: 18px;
    margin-bottom: 16px;
  }
`

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 60px;
  width: 100%;
`
