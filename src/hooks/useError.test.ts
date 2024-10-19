import { act, renderHook } from '@testing-library/react'
import { useError } from './useError'
import { AxiosError } from 'axios'

describe('useError hook', () => {
  it('should set "Email e senha incorretos" for Invalid credentials error', () => {
    const { result } = renderHook(() => useError())

    const axiosError = {
      isAxiosError: true,
      response: {
        status: 401,
        data: {
          message: 'Invalid credentials'
        }
      }
    } as AxiosError

    act(() => {
      result.current.handleError(axiosError)
    })

    expect(result.current.error).toBe('Email e senha incorretos')
  })

  it('should set "Senha incorreta" for Invalid password error', () => {
    const { result } = renderHook(() => useError())

    const axiosError = {
      isAxiosError: true,
      response: {
        status: 401,
        data: {
          message: 'Invalid password'
        }
      }
    } as AxiosError

    act(() => {
      result.current.handleError(axiosError)
    })

    expect(result.current.error).toBe('Senha incorreta')
  })

  it('should set a generic error for other errors', () => {
    const { result } = renderHook(() => useError())

    const axiosError = {
      isAxiosError: true,
      response: {
        status: 500,
        data: {
          message: 'Something went wrong'
        }
      }
    } as AxiosError

    act(() => {
      result.current.handleError(axiosError)
    })

    expect(result.current.error).toBe(
      'Algo deu errado ao processar a sua requisição, tente novamente mais tarde!'
    )
  })

  it('should clear the error when clearError is called', () => {
    const { result } = renderHook(() => useError())

    const axiosError = {
      isAxiosError: true,
      response: {
        status: 500,
        data: {
          message: 'Something went wrong'
        }
      }
    } as AxiosError

    act(() => {
      result.current.handleError(axiosError)
    })

    expect(result.current.error).toBe(
      'Algo deu errado ao processar a sua requisição, tente novamente mais tarde!'
    )

    act(() => {
      result.current.clearError()
    })

    expect(result.current.error).toBeNull()
  })
})
