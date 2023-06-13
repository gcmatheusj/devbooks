import { InputHTMLAttributes } from 'react'
import { Container } from './Input.styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: string
}

export function Input({ id, label, error, ...props }: InputProps) {
  return (
    <Container error={Boolean(error)}>
      <label htmlFor={id}>{label}</label>
      <input id={id} type="text" {...props} />
      {error && <p>{error}</p>}
    </Container>
  )
}
