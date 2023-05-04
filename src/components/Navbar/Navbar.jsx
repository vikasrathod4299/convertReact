/* eslint-disable no-undef */
import Logo from '../Util/Logo'
import NavLink from './NavLink'

const Navbar = () => {
    
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }
    };

    document.addEventListener('scroll', navbarShrink);

    const mainNav = document.body.querySelector('#mainNav');
    
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    }
        
  return (
            <nav className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
                <div className="container">
                    
                    <Logo className={'navbar-brand'}/>

                    <button className="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        Menu{' '}<i className="fas fa-bars"></i>
                    </button>
                    
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ms-auto">
                            <NavLink href={'#portfolio'} body={'Portfolio'}/>
                            <NavLink href={'#about'} body={'About'}/>
                            <NavLink href={'#contact'} body={'Contact'}/>
                        </ul>
                    </div>
                </div>
            </nav>
        )
}

export default Navbar