import { useEffect, useState } from 'react'
import PortfolioItem from './PortfolioItem'
import Heading from '../../shared/Heading';
import Divider from '../../shared/Divider';
import getPost from './getPosts';


const Portfolio = () => {
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        const data = getPost()
        setPosts(data)
    },[])

  return (
            <section className="page-section portfolio" id="portfolio">
                <div className="container">

                    <Heading color={'dark'} body={'PORTFOLIO'}/>

                    <Divider color={'dark'}/>

                    <div className="row justify-content-center">
                        {posts.map((post)=><PortfolioItem key={post.id} post={post}/>)}
                    </div>
                </div>
            </section>
  )
}

export default Portfolio