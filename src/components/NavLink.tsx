import { useMemo } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { NavItem } from '@/components/NavItem'

type Props = {
  href: string
  label: string
}

export const NavLink: React.FC<Props> = ({ href, label }) => {
  const { asPath } = useRouter()

  const active = useMemo(() => href === asPath, [href, asPath])

  return (
    <Link href={href}>
      <a>
        <NavItem label={label} active={active}>
          {label}
        </NavItem>
      </a>
    </Link>
  )
}
