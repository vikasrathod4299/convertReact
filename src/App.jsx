

import './App.css'
import Home from './pages/Home'


function App() {
  var navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector('#mainNav');
    if (!navbarCollapsible) {
        return;
    }
    if (window.scrollY === 0) {
        navbarCollapsible.classList.remove('navbar-shrink');
    } else {
        navbarCollapsible.classList.add('navbar-shrink');
    }
}

  return (
    <div onScroll={navbarShrink}>
      <Home/>
    </div>
  )
}

export default App
