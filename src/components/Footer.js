import './Footer.css'
import twitter from '../images/twitter.png'
import facebook from '../images/iconfacebook.png'
import instagram from '../images/ig.png'
import github from '../images/ghIcon.png'

function Footer() {
  return(
    <footer>
      <img src= {twitter}  alt='twitter'/>
      <img src= {facebook}  alt='facebook'/>
      <img src= {instagram} alt='instagram'/>
      <img src= {github}  alt='github'/>
    </footer>
  )
}

export default Footer;