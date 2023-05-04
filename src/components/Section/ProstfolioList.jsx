import { useEffect, useState } from 'react'
import Cabin from '../../assets/img/portfolio/cabin.png'
import cake from '../../assets/img/portfolio/cake.png'
import circus from '../../assets/img/portfolio/circus.png'
import game from '../../assets/img/portfolio/game.png'
import safe from '../../assets/img/portfolio/safe.png'
import submarine from '../../assets/img/portfolio/submarine.png'
import Portfolio from './Portfolio'

const ProstfolioList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        setPosts([Cabin,cake,circus,game,safe,submarine])
    },[])

  return (
    <section className="page-section portfolio" id="portfolio">
        <div className="container">

            <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Portfolio</h2>
    
            <div className="divider-custom">
                <div className="divider-custom-line"></div>
                <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                <div className="divider-custom-line"></div>
            </div>

            <div className="row justify-content-center">

                {posts.map((img,index)=><Portfolio key={index} img={img}/>)}
            
            </div>
        </div>
    </section>
  )
}

export default ProstfolioList