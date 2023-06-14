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

export function SignUp() {
  return (
    <Container>
      <FormContainer>
        <LogoContainer>
          <Logo />
        </LogoContainer>

        <Heading>
          <h1>Cadastre-se de graça</h1>
          <p>
            Já tem uma conta?{' '}
            <Link color="secondary" to="/">
              Entrar
            </Link>
          </p>
        </Heading>

        <InputContainer>
          <Input id="name" label="Nome Completo" type="text" />
        </InputContainer>

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
