/* eslint-disable react/prop-types */
import PortfolioModel from "./PortfolioModel"


// eslint-disable-next-line react/prop-types, 
const Portfolio = ({post}) => {

  return (
    <div className={`col-md-6 col-lg-4 mb-5 ${post.id>2?'mb-lg-0':null}`}>
      <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target={`#portfolioModal${post.id}`}>
          <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
              <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
          </div>
          <img className="img-fluid" src={post.img} alt="..." />
      </div>
      <PortfolioModel post={post}/>
    </div>
  )
}

export default Portfolio