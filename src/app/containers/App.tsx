import { CacheProvider } from '@emotion/react'
import createCache from '@emotion/cache'
import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import { useCustomTheme } from '../../theme'
import { GitHubRepositories } from '../../gitHubRepositories/containers/GitHubRepositories'

export const muiCache = createCache({
  key: 'mui',
  prepend: true,
})

export const App = () => { 
    const theme = useCustomTheme()
  return (
    <CacheProvider value={muiCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GitHubRepositories />
      </ThemeProvider>
    </CacheProvider>
  )
}