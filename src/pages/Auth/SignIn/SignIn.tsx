import { SubmitHandler, useForm } from 'react-hook-form'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

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
import { useAuth } from '../../../hooks/useAuth'
import { AlertBanner } from '../../../components/AlertBanner'
import { useError } from '../../../hooks/useError'

const validationSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'Email é obrigatório' })
    .email({ message: 'Insira um email válido' }),
  password: z
    .string()
    .min(8, { message: 'A senha deve ter pelo menos 8 caracteres' })
})

type SignInForm = z.infer<typeof validationSchema>

export function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<SignInForm>({
    resolver: zodResolver(validationSchema)
  })
  const { signIn, isAuthenticated } = useAuth()
  const { error, handleError, clearError } = useError()
  const location = useLocation()
  const navigate = useNavigate()

  const from = location.state?.from?.pathname || '/home'

  const onSubmit: SubmitHandler<SignInForm> = async (data) => {
    try {
      clearError()

      await signIn(data)

      navigate(from)
    } catch (error) {
      handleError(error)
    }
  }

  if (isAuthenticated) {
    return <Navigate to="/home" />
  }

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

        <form onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            <Input
              id="email"
              label="Email"
              type="email"
              error={errors.email?.message}
              {...register('email')}
            />
          </InputContainer>

          <InputContainer>
            <Input
              id="password"
              label="Senha"
              type="password"
              error={errors.password?.message}
              {...register('password')}
            />
          </InputContainer>

          <Button fullWidth>Entrar</Button>

          {error && <AlertBanner variant="error" message={error} />}
        </form>
      </FormContainer>
    </Container>
  )
}
