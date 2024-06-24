import { useState } from 'react'
import { Button } from '../Button'
import { Input } from '../Input'

import { Container, UpdatePasswordContainer } from './Security.styles'
import { useUpdatePasswordMutation } from '../../hooks/useUpdatePasswordMutation'
import { AlertBanner } from '../AlertBanner'
import { useError } from '../../hooks/useError'

export function Security() {
  const [newPassword, setNewPassword] = useState('')
  const [currentPassword, setCurrentPassword] = useState('')
  const { error, handleError, clearError } = useError()
  const [success, setSuccess] = useState(false)

  const { mutateAsync, isLoading } = useUpdatePasswordMutation()

  const handleUpdatePassword = async () => {
    try {
      clearError()
      setSuccess(false)

      await mutateAsync({ newPassword, currentPassword })

      setNewPassword('')
      setCurrentPassword('')
      setSuccess(true)
    } catch (error) {
      handleError(error)
    }
  }

  return (
    <Container>
      <h2>Segurança</h2>

      <UpdatePasswordContainer>
        <Input
          label="Senha Atual"
          type="password"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
        />
        <Input
          label="Nova Senha"
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <Button
          disabled={!newPassword || !currentPassword || isLoading}
          onClick={handleUpdatePassword}
        >
          {isLoading ? 'Atualizando...' : 'Atualizar Senha'}
        </Button>

        {success && <AlertBanner message="Senha atualizada com sucesso!" />}

        {error && <AlertBanner variant="error" message={error} />}
      </UpdatePasswordContainer>
    </Container>
  )
}
