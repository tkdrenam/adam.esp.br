type Props = {
  label: string
  active: boolean
}

export const NavItem: React.FC<Props> = ({ label, active }) => {
  return (
    <div className={`${ active ? 'text-red-600' : 'text-white'} font-bold text-base uppercase px-2 py-6 mx-1 cursor-pointer`}>
      {label}
    </div>
  )
}
