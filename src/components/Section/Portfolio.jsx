

// eslint-disable-next-line react/prop-types
const Portfolio = ({img}) => {
  return (
    <div className="col-md-6 col-lg-4 mb-5 ">
      <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal4">
          <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
              <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
          </div>
          <img className="img-fluid" src={img} alt="..." />
      </div>
    </div>
  )
}

export default Portfolio