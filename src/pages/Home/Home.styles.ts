import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 1.6rem;
  margin-top: 1.6rem;
`

export const ChartContainer = styled.div`
  grid-row: 2 / 3;
  grid-column: 1 / 4;
`

export const Card = styled.div`
  ${({ theme }) => css`
    border: 0.1rem solid ${theme.colors.gray};
    border-radius: ${theme.border.radius.default};
    padding: ${theme.spacings.small} ${theme.spacings.xsmall};
    width: 100%;
    background-color: ${theme.colors.white};
  `}
`

export const CardBody = styled.div`
  display: flex;
  justify-content: space-between;
`

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
`

export const IconContainer = styled.div`
  ${({ theme }) => css`
    width: 3.8rem;
    color: ${theme.colors.primary};
  `}
`

export const CardTitle = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    font-weight: 500;
    margin-bottom: ${theme.spacings.xxsmall};
  `}
`

export const CardValue = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxxlarge};
    font-weight: bold;
    margin-bottom: ${theme.spacings.xxxsmall};
  `}
`
