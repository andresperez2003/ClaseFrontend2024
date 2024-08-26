
import "../styles/Header.css"


interface HeaderProps {
  onSelect: (tab: string) => void;
}

const Header : React.FC<HeaderProps> = ({ onSelect }) => {
  return (
    <header className='header'>
    <ul>
    <li onClick={() => onSelect && onSelect('Manizales')}>Manizales </li>
    <li onClick={() => onSelect('Touristic site')}>Touristic site</li>
    </ul>
   </header>
  )
}

export default Header