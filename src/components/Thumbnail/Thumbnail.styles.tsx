import styled, { css } from 'styled-components'

interface ContainerProps {
  size: 'small' | 'large'
  bgColor: string
}

const containerCustomStyles = {
  small: () => css`
    height: 300px;
    width: 100%;
    border-radius: 4px;

    svg {
      width: 120px;
      color: #fff;
    }
  `,
  large: () => css`
    height: 100vh;
    width: 50%;

    svg {
      width: 300px;
      color: #fff;
    }
  `
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ bgColor }) => bgColor};
  transition: all 0.5s;

  ${({ size }) => containerCustomStyles[size]}
`
