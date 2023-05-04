import { useEffect, useState } from 'react'
import Portfolio from './Portfolio'
import Heading from '../../Util/Heading';
import Divider from '../../Util/Divider';
import getPost from './getPosts';


const ProstfolioList = () => {
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
                        {posts.map((post)=><Portfolio key={post.id} post={post}/>)}
                    </div>
                </div>
            </section>
  )
}

export default ProstfolioList