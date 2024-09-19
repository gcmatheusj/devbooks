import { MemoryRouter, Route, Routes } from 'react-router-dom'

import { fireEvent, screen, waitFor } from '@testing-library/react'
import { renderWithTheme } from '../../../utils/tests/helpers'
import { useAuth } from '../../../hooks/useAuth'

import { SignIn } from './SignIn'

jest.mock('../../../hooks/useAuth')

// System under test
const Sut = () => (
  <MemoryRouter>
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/home" element={<h1>Home Page</h1>} />
    </Routes>
  </MemoryRouter>
)

const mockUseAuth = (signInMock: jest.Mock, isAuthenticated: boolean) => {
  // eslint-disable-next-line prettier/prettier
  (useAuth as jest.Mock).mockReturnValue({
    signIn: signInMock,
    isAuthenticated
  })
}

describe('SignIn Component', () => {
  const mockSignIn = jest.fn()

  beforeEach(() => {
    mockUseAuth(mockSignIn, false)
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('renders form inputs and button correctly', () => {
    renderWithTheme(<Sut />)

    expect(screen.getByText('DevBooks')).toBeInTheDocument()
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
    expect(screen.getByLabelText('Senha')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /entrar/i })).toBeInTheDocument()
  })

  it('shows validation errors when inputs are invalid', async () => {
    renderWithTheme(<Sut />)

    fireEvent.click(screen.getByRole('button', { name: /entrar/i }))

    await waitFor(() => {
      expect(screen.getByText('Email é obrigatório')).toBeInTheDocument()
      expect(
        screen.getByText('A senha deve ter pelo menos 8 caracteres')
      ).toBeInTheDocument()
    })

    fireEvent.input(screen.getByLabelText('Email'), {
      target: { value: 'test' }
    })

    await waitFor(() => {
      expect(screen.getByText('Insira um email válido')).toBeInTheDocument()
    })
  })

  it('calls signIn function with correct data when form is submitted', async () => {
    renderWithTheme(<Sut />)

    fireEvent.input(screen.getByLabelText('Email'), {
      target: { value: 'test@example.com' }
    })
    fireEvent.input(screen.getByLabelText('Senha'), {
      target: { value: 'password123' }
    })

    fireEvent.click(screen.getByRole('button', { name: /entrar/i }))

    await waitFor(() => {
      expect(mockSignIn).toHaveBeenCalledWith({
        email: 'test@example.com',
        password: 'password123'
      })
    })
  })

  it('navigates to /home when authentication is successful', async () => {
    renderWithTheme(<Sut />)

    fireEvent.input(screen.getByLabelText('Email'), {
      target: { value: 'test@example.com' }
    })
    fireEvent.input(screen.getByLabelText('Senha'), {
      target: { value: 'password123' }
    })

    fireEvent.click(screen.getByRole('button', { name: /entrar/i }))

    await waitFor(() => {
      expect(screen.getByText(/home page/i)).toBeInTheDocument()
      expect(
        screen.queryByText(/email e senha incorretos/i)
      ).not.toBeInTheDocument()
    })
  })

  it('shows an error message when signIn fails', async () => {
    const mockAxiosError = {
      isAxiosError: true,
      response: {
        status: 401,
        data: {
          message: 'Invalid credentials'
        }
      },
      message: 'Request failed with status code 401',
      toJSON: () => ({})
    }

    mockSignIn.mockRejectedValueOnce(mockAxiosError)

    renderWithTheme(<Sut />)

    fireEvent.input(screen.getByLabelText('Email'), {
      target: { value: 'test@example.com' }
    })
    fireEvent.input(screen.getByLabelText('Senha'), {
      target: { value: 'password123' }
    })

    fireEvent.click(screen.getByRole('button', { name: /entrar/i }))

    await waitFor(() => {
      expect(screen.getByText(/email e senha incorretos/i)).toBeInTheDocument()
      expect(screen.queryByText(/home page/i)).not.toBeInTheDocument()
    })
  })

  it('redirects to /home if user is already authenticated', async () => {
    mockUseAuth(mockSignIn, true)

    renderWithTheme(<Sut />)

    await waitFor(() => {
      expect(screen.getByText(/home page/i)).toBeInTheDocument()
    })
  })
})
