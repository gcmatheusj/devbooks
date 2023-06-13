import { Button } from '../../../components/Button'
import { Input } from '../../../components/Input'
import { Link } from '../../../components/Link'
import { Logo } from '../../../components/Logo/Logo'

export function SignIn() {
  return (
    <div style={{ width: 600 }}>
      <Logo />
      <h1>Faça seu login!</h1>
      <p>
        Não tem uma conta?{' '}
        <Link color="secondary" to="/">
          Cadastre-se
        </Link>
      </p>
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
