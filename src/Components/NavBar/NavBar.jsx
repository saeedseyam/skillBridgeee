import React ,{useState , useEffect} from 'react';
import './NavBar.css'
import { Link } from 'react-scroll';
import menu from '../../assets/menu.png'
const NavBar = () => {
  const[sticky ,  setSticky] = useState(false)
  useEffect(() => {
  window.addEventListener('scroll' , ()=>{
    window.scrollY > 50 ? setSticky(true) : setSticky(false);
  })
  }, [])
  const[mobilemenu , setMobilemenu] = useState(false)
  const toggleMenu = ()=>{
    mobilemenu ? setMobilemenu(false) :  setMobilemenu(true) ; 

  }
  return (
    <nav className={`container  ${sticky ? 'dark-nav': ''}`}>
       <h2>SkillBridge</h2>
        <ul className={mobilemenu ?  '':  'hide-mobile-menu' }>

            <li> <Link to='hero'smooth ={true} offset={0} duration={500}>Home</Link></li>
            <li> <Link to='Programs'smooth ={true} offset={-260} duration={500}>Program</Link></li>
            <li> <Link to='about'smooth ={true} offset={-100} duration={500}>About us</Link></li>
            <li> <Link to='Campus'smooth ={true} offset={-220} duration={500}>Campus</Link></li>
            <li> <Link to='Testimonials'smooth ={true} offset={-260} duration={500}>Testimonials</Link></li>
            <li> <Link to='contact'smooth ={true} offset={0} duration={500}>Contact us</Link></li>
        </ul>
        <img src={menu} alt="" className='menu' onClick={toggleMenu}/>
    </nav>
  )
}

export default NavBar
