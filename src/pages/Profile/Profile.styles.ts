import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    margin-top: ${theme.spacings.xsmall};
    gap: ${theme.spacings.small};
  `}
`

export const ProfileMenu = styled.div`
  ${({ theme }) => css`
    width: 30rem;
    height: 40rem;
    border-right: 0.1rem solid ${theme.colors.gray};

    ul {
      list-style: none;
    }
  `}
`

interface ProfileMenuItemProps {
  isActive?: boolean
}

export const ProfileMenuItem = styled.li<ProfileMenuItemProps>`
  ${({ theme, isActive }) => css`
    border-right: ${isActive ? `0.2rem solid ${theme.colors.primary}` : 'none'};
    background: ${isActive ? ' #e8e5f1' : 'transparent'};
    padding: ${theme.spacings.small} ${theme.spacings.xsmall};
    cursor: pointer;
    transition: background 0.3s;

    &:hover {
      background: #e8e5f1;
    }
  `}
`
