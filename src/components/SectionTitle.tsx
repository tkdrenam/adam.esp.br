type Props = {}

export const SectionTitle: React.FC<Props> = ({ children }) => {
  return <h2 className="uppercase text-red-600 mb-10"><span className="text-gray-400 mr-2">||</span> {children}</h2>
}
