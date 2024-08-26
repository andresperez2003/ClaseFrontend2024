
import "../styles/Header.css"
import Clock from "./Clock";


interface HeaderProps {
  onSelect: (tab: string) => void;
}

const Header : React.FC<HeaderProps> = ({ onSelect }) => {
  return (
    <header className='header'>
    <ul>
    <li onClick={() => onSelect && onSelect('Manizales')}>Manizales </li>
    <li onClick={() => onSelect('Touristic site')}>Touristic site</li>
    <li onClick={() => onSelect('ContactUs')}>Contact us</li>
    </ul>
   </header>
  )
}

export default Header