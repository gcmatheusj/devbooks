import { ThemeProvider } from 'styled-components'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { GlobalStyles } from './styles/global'
import { theme } from './styles/theme'

import { SignIn } from './pages/Auth/SignIn'
import { SignUp } from './pages/Auth/SignUp'
import { AuthProvider } from './context/AuthContext'
import { Home } from './pages/Home/Home'
import { RequireAuth } from './components/RequireAuth/RequireAuth'

const queryClient = new QueryClient()

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <AuthProvider>
            <Routes>
              <Route path="/" element={<SignIn />} />
              <Route path="/cadastro" element={<SignUp />} />
              <Route
                path="/home"
                element={
                  <RequireAuth>
                    <Home />
                  </RequireAuth>
                }
              />
            </Routes>
          </AuthProvider>
        </QueryClientProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
