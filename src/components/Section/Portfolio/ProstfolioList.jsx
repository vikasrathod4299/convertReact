import { useEffect, useState } from 'react'

import Portfolio from './Portfolio'
import getPost from './getPosts';


const ProstfolioList = () => {
    // eslint-disable-next-line no-unused-vars
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        const data = getPost()
        setPosts(data)
    },[])
    console.log(posts)
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

                {posts.map((post)=><Portfolio key={post.id} post={post}/>)}
      
            </div>
        </div>
    </section>
  )
}

export default ProstfolioList