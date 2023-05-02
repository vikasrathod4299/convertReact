import React, { useEffect, useState } from 'react'
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
    <section class="page-section portfolio" id="portfolio">
        <div class="container">

            <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Portfolio</h2>
    
            <div class="divider-custom">
                <div class="divider-custom-line"></div>
                <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                <div class="divider-custom-line"></div>
            </div>

            <div class="row justify-content-center">
                {posts.map(img=><Portfolio img={img}/>)}
            </div>
        </div>
    </section>
  )
}

export default ProstfolioList