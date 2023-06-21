import { SubmitHandler, useForm } from 'react-hook-form'

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

interface SignUpForm {
  name: string
  email: string
  password: string
}

export function SignUp() {
  const { register, handleSubmit } = useForm<SignUpForm>()

  const onSubmit: SubmitHandler<SignUpForm> = async (data) => {
    console.log(data)
  }

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

        <form onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            <Input
              id="name"
              label="Nome Completo"
              type="text"
              {...register('name')}
            />
          </InputContainer>

          <InputContainer>
            <Input
              id="email"
              label="Email"
              type="email"
              {...register('email')}
            />
          </InputContainer>

          <InputContainer>
            <Input
              id="password"
              label="Senha"
              type="password"
              {...register('password')}
            />
          </InputContainer>

          <Button fullWidth>Entrar</Button>
        </form>
      </FormContainer>
    </Container>
  )
}
