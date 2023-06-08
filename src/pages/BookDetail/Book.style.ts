import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  background-color: #fff;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const BackButton = styled.button`
  background-color: transparent;
  border: 0;
  outline: 0;
  height: 46px;
  width: 46px;
  cursor: pointer;
  position: fixed;
  left: 20px;
  top: 20px;

  @media (max-width: 1024px) {
    height: 32px;
    width: 32px;
    left: 12px;
  }

  @media (max-width: 768px) {
    height: 28px;
    width: 28px;
    left: 8px;
  }
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
    margin-bottom: 16px;
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

  @media (max-width: 768px) {
    overflow-y: inherit;
    width: 100%;
  }

  @media (max-width: 768px), (max-width: 1024px) {
    h2 {
      font-size: 24px;
    }

    h3 {
      font-size: 18px;
      margin-bottom: 8px;
    }

    p {
      font-size: 14px;
    }
  }
`

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 60px;
  width: 100%;
`
