
import "../styles/Footer.css";
import github from "../assets/images/github.png";
const Footer = () => {
  return (
    <footer className='footer'>
      <a href="https://github.com/andresperez2003" target="_blank" rel="noopener noreferrer">
        <img src={github} alt="GitHub" width="35px" />
      </a>
      <a href="https://github.com/andresperez2003" target="_blank" rel="noopener noreferrer" style={{paddingLeft:"20px", textDecoration:" none", color:"inherit"}}>Developed by Andres Perez</a>
  </footer>
  )
}

export default Footer