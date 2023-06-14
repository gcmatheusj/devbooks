import { Button } from '../../../components/Button'
import { Input } from '../../../components/Input'
import { Link } from '../../../components/Link'
import { Logo } from '../../../components/Logo/Logo'

import {
  Container,
  FormContainer,
  LogoContainer,
  Heading,
  InputContainer
} from '../Auth.styles'

export function SignIn() {
  return (
    <Container>
      <FormContainer>
        <LogoContainer>
          <Logo />
        </LogoContainer>

        <Heading>
          <h1>Faça seu login</h1>
          <p>
            Não tem uma conta?{' '}
            <Link color="secondary" to="/cadastro">
              Cadastre-se
            </Link>
          </p>
        </Heading>

        <InputContainer>
          <Input id="email" label="Email" type="email" />
        </InputContainer>

        <InputContainer>
          <Input id="password" label="Senha" type="password" />
        </InputContainer>

        <Button fullWidth>Entrar</Button>
      </FormContainer>
    </Container>
  )
}
