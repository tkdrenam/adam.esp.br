import { useMemo, useRef } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { NavItem } from '@/components/NavItem'
import { useDisclosure } from '@/hooks/useDisclosure'
import { useOnClickOutside } from '@/hooks/useOnClickOutside'

type Props = {
  label: string
  menus: {
    href: string
    label: string
  }[]
}

export const NavDropdown: React.FC<Props> = ({ label, menus }) => {
  const { asPath } = useRouter()

  const { isOpen, close, toggle } = useDisclosure()
  
  const menuRef = useRef()
  useOnClickOutside([menuRef], close)

  const active = useMemo(() => !!menus.find((menu) => menu.href === asPath), [menus, asPath])

  return (
    <div className="relative" ref={menuRef}>
      <div onClick={toggle}>
        <NavItem label={label} active={active} />
      </div>

      {isOpen && (
        <div className="w-full fixed inset-0 overflow-y-auto bg-black flex flex-col z-10 md:absolute md:mt-16 md:w-auto md:rounded-sm md:right-auto md:bottom-auto">
          <div className="text-white text-right font-bold p-10 md:hidden" onClick={close}>
            X
          </div>

          {menus.map(({ href, label }) => {
            return (
              <Link key={href} href={href}>
                <a className="uppercase text-white text-lg text-center px-4 py-2 my-2 w-full opacity-100 hover:opacity-100 md:opacity-75 md:text-sm md:text-left md:w-56">
                  {label}
                </a>
              </Link>
            )
          })}
        </div>
      )}
    </div>
  )
}
