import avatar from '../assets/img/avataaars.svg'
import Logo from './Logo'
import Divider from './Divider'
const Header = () => {
  return (
    <header className="masthead bg-primary text-white text-center">
    
    <div className="container d-flex align-items-center flex-column">

        <img className="masthead-avatar mb-5" src={avatar} alt="..." />

        <h1><Logo /></h1>
        
        <Divider color={'light'}/>
        
        <p className="masthead-subheading font-weight-light mb-0">Graphic Artist - Web Designer - Illustrator</p>
    
    </div>
</header>
  )
}

export default Header