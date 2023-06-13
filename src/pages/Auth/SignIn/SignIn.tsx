import { Button } from '../../../components/Button'
import { Input } from '../../../components/Input'

export function SignIn() {
  return (
    <div style={{ width: 600 }}>
      <h1>Faça seu login!</h1>
      <Input
        id="email"
        label="Email"
        type="email"
        error="Email é obrigatório"
      />
      <Input id="password" label="Senha" type="password" />
      <Button fullWidth>Entrar</Button>
    </div>
  )
}
