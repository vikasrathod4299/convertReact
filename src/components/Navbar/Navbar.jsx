/* eslint-disable no-undef */
import { useState, useEffect } from 'react';
import Logo from '../shared/Logo'
import NavLink from './NavLink'

const Navbar = () => {
    const [isShrink, setIsShrink] = useState(false);

    function navbarShrink() {
        if (window.scrollY === 0) {
            setIsShrink(false)
        } else {
            setIsShrink(true)
        }
    }
    
    useEffect(()=>{
        
        window.addEventListener('scroll',navbarShrink)

        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        })

        return ()=> window.removeEventListener('scroll',navbarShrink)

    },[])


        
   return (
             // eslint-disable-next-line react/no-unknown-property
             <nav className={`navbar ${isShrink?'navbar-shrink':null} navbar-expand-lg bg-secondary text-uppercase fixed-top`} id="mainNav" >
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

export default Navbar;