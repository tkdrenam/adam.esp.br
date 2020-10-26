import { useEffect } from 'react'
import '@/styles/index.css'

const App = ({ Component, pageProps }) => {
  useEffect(() => {
    const netlifyIdentity = window['netlifyIdentity'] as any
    if (netlifyIdentity) {
      netlifyIdentity.on('init', (user) => {
        if (!user) {
          netlifyIdentity.on('login', () => {
            document.location.href = '/admin/'
          })
        }
      })
    }
  }, [])

  return <Component {...pageProps} />
}

export default App
