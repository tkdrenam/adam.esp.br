import Link from 'next/link'
import { styled } from '@/styles'

const HeaderStyled = styled('header', {
  backgroundColor: 'gainsboro',
})

export const Header = () => {
  return (
    <HeaderStyled>
      <nav className="nav">
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/blog">
          <a>My Blog</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
      </nav>
    </HeaderStyled>
  )
}
