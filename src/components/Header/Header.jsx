import avatar from '../../assets/img/avataaars.svg'
import Divider from '../Util/Divider'
const Header = () => {
  return (
    <header className="masthead bg-primary text-white text-center">
    
    <div className="container d-flex align-items-center flex-column">

        <img className="masthead-avatar mb-5" src={avatar} alt="..." />

        <h1 className="masthead-heading text-uppercase mb-0">Start Bootstrap</h1>
        
        <Divider color={'light'}/>
        
        <p className="masthead-subheading font-weight-light mb-0">Graphic Artist - Web Designer - Illustrator</p>
    
    </div>
</header>
  )
}

export default Header