/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/prop-types */

import Divider from "../../shared/Divider"
import Heading from "../../shared/Heading"

// eslint-disable-next-line react/prop-types
const PortfolioModel = ({post}) => {
  return (
    <div className="portfolio-modal modal fade" id={`portfolioModal${post.id}`} tabIndex="-1" aria-labelledby={`portfolioModal${post.id}`} aria-hidden="true">
    <div className="modal-dialog modal-xl">
        <div className="modal-content">
            <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
            <div className="modal-body text-center pb-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">

                            <Heading color={'black'} body={post.heading}/>

                            <Divider color={'dark'}/>

                            <img className="img-fluid rounded mb-5" src={post.img} alt="..." />
     
                            <p className="mb-4">{post.desc}</p>

                            <button className="btn btn-primary" data-bs-dismiss="modal">
                                <i className="fas fa-xmark fa-fw"></i>
                                {' '}Close Window
                            </button>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default PortfolioModel