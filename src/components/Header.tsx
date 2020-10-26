import Link from 'next/link'

export const Header = () => {
  return (
    <nav>
      <ul className="flex justify-between items-center p-8">
        <li>
          <Link href="/">
            <a className="text-blue-500 no-underline">Home</a>
          </Link>
        </li>
        <li>
          <Link href="/blog">
            <a className="text-blue-500 no-underline">Blog</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a className="text-blue-500 no-underline">About</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
