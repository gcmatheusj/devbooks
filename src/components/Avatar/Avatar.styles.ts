import styled, { css } from 'styled-components'

interface AvatarContainerProps {
  size: number
  avatar?: string
}

export const Container = styled.div<AvatarContainerProps>`
  ${({ theme, size, avatar }) => css`
    display: flex;
    justify-content: center;
    align-items: center;

    height: ${size}px;
    width: ${size}px;
    border-radius: ${theme.border.radius.small};
    color: #fff;

    svg {
      height: ${size / 2}px;
      width: ${size / 2}px;
    }

    ${avatar &&
    css`
      background-image: url(${avatar});
      background-size: cover;
      background-position: center;
    `}

    ${!avatar &&
    css`
      background-color: ${theme.colors.primary};
    `}
  `}
`
